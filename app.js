var util = require("util");
var events = require("events");
var _ = require("underscore");
var datetime = require("./lib/datetime");
var Show = require("./lib/show");

var CURRENT_ROUND = 0;
var _date = datetime(2014, 7, 31);

var round = {
    start: _date(8),
    magicians: [{
        name: 'A',
        start: _date(8, 2),
        score: _date(8, 4),
        end: _date(8, 6),
        scores: [Show.ACE, Show.THREE, Show.KING]
    }, {
        name: 'B',
        start: _date(8, 6),
        score: _date(8, 8),
        end: _date(8, 10),
        scores: [Show.THREE, Show.KING, Show.ACE]
    }, {
        name: 'C',
        start: _date(8, 10),
        score: _date(8, 12),
        end: _date(8, 14),
        scores: [Show.FIVE, Show.SEVEN, Show.THREE]
    }, {
        name: 'D',
        start: _date(8, 14),
        score: _date(8, 16),
        end: _date(8, 18),
        scores: [Show.SEVEN, Show.ACE, Show.FIVE]
    }, {
        name: 'E',
        start: _date(8, 18),
        score: _date(8, 20),
        end: _date(8, 22),
        scores: [Show.NINE, Show.JACK, Show.SEVEN]
    }],
    score: _date(8, 22),
    end: _date(8, 24),
};


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

app.use(morgan('combined'));
app.use("/", express.static(__dirname + "/public"));

port = argv.port || PORT;
server.listen(port, function() {
    console.log("listening on port", port);
});

io.on("connection", function(socket) {
    socket.emit('news', {
        hello: "world"
    });

    socket.on('my other event', function(data) {
        console.log(data);
    });
});

var show = new Show(round);
show.loop();

show.on('start', function() {
    console.log('show start!');
});

show.on('magician-changed', function() {
    console.log('magician changed! current magician:', show.magician.name);
});

show.on('magician-start', function() {
    console.log('magician start!');

});

show.on('magician-score', function() {
    console.log('magician score!');
});

show.on('magician-finsh', function() {
    console.log('magician finsh!');
});

show.on('score', function() {
    console.log('score');
});

show.on('finish', function() {
    console.log('show finished');
});