var util = require("util");
var events = require("events");
var _ = require("underscore");
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

app.get("/wait", function(req, res) {
    if(show.showStatus == Show.SHOW_WAITING) {
        return res.redirect("/wait.html");
    } else {
        return res.redirect("/");
    }
});

port = argv.port || PORT;
server.listen(port, function() {
    console.log("listening on port", port);
});

var showController = io.of('/show').on("connection", function(socket) {
    socket.on('query', function(params) {
        console.log('query', params);
        if (params.data === 'status') {
            var data = {
                id: params.id,
                result: {
                    status: show.showStatus,
                    time: _date(0)
                }
            };

            if (show.showStatus === Show.SHOW_PLAYING && show.magician) {
                data.result.magician = {
                    name: show.magician.name,
                    avatar: '/img/magician-avatar.jpeg',
                    status: show.magician.status
                };
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

    // console.log('loop', 'time:', new Date());
    // console.log('status:', this.showStatus);
    // console.log('current magician:', this.magician ? this.magician.name : 'no magician');
    //console.log('current magician:', this.magician);
    //console.log('magicians:', this.magicians);
}
show.launch();

show.on('start', function() {
    console.log('show start!');
    showController.emit('start');
});

show.on('magician-changed', function() {
    console.log('magician changed! current magician:', show.magician.name);
    showController.emit('magician-changed', show.magician);
});

show.on('magician-start', function() {
    console.log('magician start!');
    showController.emit('magician-start', show.magician);
});

show.on('magician-score', function() {
    console.log('magician score!');
    showController.emit('magician-score', show.magician);
});

show.on('magician-finish', function() {
    console.log('magician finsh!');
});

show.on('score', function() {
    console.log('score');
    showController.emit('score');
});

show.on('finish', function() {
    console.log('show finished');
    showController.emit('finish');
});
