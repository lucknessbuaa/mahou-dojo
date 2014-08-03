var util = require("util");
var events = require("events");
var _ = require("underscore");
var mongodb = require("mongodb");
var datetime = require("./lib/datetime");
var Show = require("./lib/show");
var round = require("./lib/fake");

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
    console.log("listening on port", port);
});

var showController = io.of('/show').on("connection", function(socket) {
    socket.on('score', function(data) {
        console.log('client data updated', data);
    });

    socket.on('query', function(params) {
        console.log('query', params);
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

            console.log('status', data);
            socket.emit('query', data);
        }
    });
});

var show = new Show(round);
var _loop = show.loop;
show.loop = function() {
    _loop.call(this);

    console.log('loop', 'time:', new Date(), 'status:', this.showStatus);
    if (this.magician) {
        console.log('current magician:', this.magician.name, this.magician.status);
    } else {
        console.log('current magician:', 'no magician');
    }
}
show.launch();

show.on('start', function() {
    console.log('show start!');
    showController.emit('start');
});

show.on('magician-changed', function() {
    console.log('magician changed! current magician:', show.magician.name);
    showController.emit('magician-changed', show.magician.values());
});

show.on('magician-start', function() {
    console.log('magician start!');
    showController.emit('magician-start', show.magician.values());
});

show.on('magician-score', function() {
    console.log('magician score!');
    showController.emit('magician-score', show.magician.values());
});

show.on('magician-finish', function() {
    console.log('magician finsh!');
    showController.emit('magician-finish', show.magician.values());
});

show.on('score', function() {
    console.log('score');
    showController.emit('score', {
        end: show.end.getTime()
    });
});

show.on('finish', function() {
    console.log('show finished');
    showController.emit('finish');
});