var MongoClient = require("mongodb").MongoClient;
var bunyan = require('bunyan');
var audienceCollection, round, showCollection;
var log = bunyan.createLogger({
    name: 'mahou',
    streams: [{
        type: 'rotating-file',
        path: 'logs/app.log'
    }]
});
var loopLogger = bunyan.createLogger({
    name: 'looper',
    streams: [{
        type: 'rotating-file',
        path: 'logs/looper.log'
    }]
});

MongoClient.connect("mongodb://localhost:27017/mahou", function(err, db) {
    if (err) {
        return log.error(err);
    }

    db.createCollection('audience', function(err, collection) {
        if (err) {
            return log.error(err);
        }

        audienceCollection = collection;
        ensureDB();
    });

    db.createCollection('show', function(err, collection) {
        if (err) {
            return log.error(err);
        }

        showCollection = collection;
        showCollection.findOne({
            id: 0
        }, function(err, item) {
            if (err) {
                return log.error(err);
            }

            if (!item) {
                return log.error('round not found');
            }

            round = item;
            ensureDB();
        });
    });
});

function ensureDB() {
    if (!round || !audienceCollection || !showCollection) {
        return;
    }

    launch();
}

function launch() {
    var util = require("util");
    var events = require("events");
    var _ = require("underscore");
    var bodyParser = require("body-parser");
    var datetime = require("./lib/datetime");
    var Show = require("./lib/show");

    var PORT = 4000;
    var argv = require("minimist")(process.argv.slice(2), {
        string: ['port'],
        alias: {
            port: 'p'
        },
        default: {
            port: PORT
        }
    });
    var express = require("express");
    var morgan = require("morgan");

    var app = express();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);

    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use("/", express.static(__dirname + "/public"));

    app.get("/", function(req, res) {
        if (show.showStatus == Show.SHOW_WAITING) {
            return res.redirect("/wait.html");
        } else if (show.showStatus == Show.SHOW_FINISHED) {
            return res.redirect("/score.html");
        }
    });

    app.get("/wait", function(req, res) {
        if (show.showStatus == Show.SHOW_WAITING) {
            return res.redirect("/wait.html");
        }
    });

    app.post("/mobile", function(req, res, next) {
        if (!req.body.mobile || !req.body.token) {
            return res.send({
                'rel_code': 1001
            });
        }

        audienceCollection.update({
            token: req.body.token,
        }, {
            $set: {
                mobile: req.body.mobile
            }
        }, {
            upsert: true
        }, function(err) {
            if (err) {
                return next(err);
            }

            return res.send({
                'ret_code': 0
            });
        });
    });

    app.get("/score", function(req, res) {
        if (show.showStatus == Show.SHOW_FINISHED) {
            return res.redirect("/score.html");
        } else if (show.showStatus == Show.SHOW_WAITING) {
            return res.redirect("/wait.html");
        } else {
            return res.redirect("/index.html");
        }
    });

    app.get('/scores', function(req, res) {
        if (show.showStatus == Show.SHOW_FINISHED) {
            res.send(round);
        } else {
            res.send({
                magicians: []
            });
        }
    });

    port = argv.port || PORT;
    server.listen(port, function() {
        log.info("listening on port",port);
    });

    var showController = io.of('/show').on("connection", function(socket) {
        socket.on('add-score', function(data) {
            log.info('client data updated', data);
            if (!data.token) {
                return;
            }

            var score = {};
            score[String(data.id)] = data.score;

            audienceCollection.update({
                token: data.token
            }, {
                $set: score
            }, {
                upsert: true
            }, function(err) {
                if (err) {
                    return log.error(err);
                }
            });
        });

        socket.on('query', function(params) {
            log.info('query', params);
            if (params.data === 'status') {
                var data = {
                    id: params.id,
                    result: {
                        id: show.id,
                        status: show.showStatus,
                        time: round.start.getTime()
                    }
                };

                if (show.showStatus === Show.SHOW_PLAYING && show.magician) {
                    data.result.magician = show.magician.values();
                }

                if (show.showStatus === Show.SHOW_SCORE) {
                    data.end = show.end.getTime();
                }

                log.info('status', data);
                socket.emit('query', data);
            }
        });
    });

    var show = new Show(round);
    var _loop = show.loop;
    show.loop = function() {
        _loop.call(this);

        loopLogger.info('loop', 'time:', new Date(), 'status:', this.showStatus);
        if (this.magician) {
            loopLogger.info('current magician:', this.magician.name, this.magician.status);
        } else {
            loopLogger.info('current magician:', 'no magician');
        }
    }
    show.launch();

    show.on('start', function() {
        log.info('show start!');
        showController.emit('start');
    });

    show.on('magician-changed', function() {
        log.info('magician changed! current magician:', show.magician.name);
        showController.emit('magician-changed', show.magician.values());
    });

    show.on('magician-start', function() {
        log.info('magician start!');
        showController.emit('magician-start', show.magician.values());
    });

    show.on('magician-score', function() {
        log.info('magician score!');
        showController.emit('magician-score', show.magician.values());
    });

    show.on('magician-finish', function() {
        log.info('magician finsh!');
        showController.emit('magician-finish', show.magician.values());
    });

    show.on('score', function() {
        log.info('score');
        showController.emit('score', {
            end: show.end.getTime()
        });
    });

    show.on('finish', function() {
        log.info('show finished');
        showController.emit('finish');
    });
}
