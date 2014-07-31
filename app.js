var util = require("util");
var events = require("events");
var _ = require("underscore");
var datetime = require("./lib/datetime");
var Show = require("./lib/show");

var CURRENT_ROUND = 0;
var _date = function(minutes) {
    return datetime(2014, 7, 31, 20, 31 + minutes);
}

var UNIT = 30;

var round = {
    start: _date(0),
    magicians: [{
        id: 0,
        name: 'A',
        start: _date(1 * UNIT),
                    avatar: '/img/magician-avatar.jpeg',
        score: _date(2 * UNIT),
        end: _date(3 * UNIT),
        scores: [Show.ACE, Show.THREE, Show.KING]
    }, {
        id: 1,
        name: 'B',
        start: _date(4 * UNIT),
                    avatar: '/img/magician-avatar.jpeg',
        score: _date(5 * UNIT),
        end: _date(6 * UNIT),
        scores: [Show.THREE, Show.KING, Show.ACE]
    }, {
        id: 3,
        name: 'C',
        start: _date(7 * UNIT),
                    avatar: '/img/magician-avatar.jpeg',
        score: _date(8 * UNIT),
        end: _date(9 * UNIT),
        scores: [Show.FIVE, Show.SEVEN, Show.THREE]
    }, {
        id: 4,
        name: 'D',
        start: _date(10 * UNIT),
                    avatar: '/img/magician-avatar.jpeg',
        score: _date(11 * UNIT),
        end: _date(12 * UNIT),
        scores: [Show.SEVEN, Show.ACE, Show.FIVE]
    }, {
        id: 5,
        name: 'E',
        start: _date(13 * UNIT),
                    avatar: '/img/magician-avatar.jpeg',
        score: _date(14 * UNIT),
        end: _date(15 * UNIT),
        scores: [Show.NINE, Show.JACK, Show.SEVEN]
    }],
    score: _date(16 * UNIT),
    end: _date(17 * UNIT),
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

app.use(morgan('dev'));
app.use("/", express.static(__dirname + "/public"));

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
                    status: show.showStatus
                }
            };

            if (show.showStatus === Show.SHOW_PLAYING && show.magician) {
                data.result.magician = show.magician.values([
                    'id', 'name', 'avatar', 'status', 'start', 'score', 'end'
                ]);
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
    showController.emit('magician-changed', {
        magician: show.magician.values([
            'id', 'name', 'avatar', 'status', 'start', 'score', 'end'
        ])
    });
});

show.on('magician-start', function() {
    console.log('magician start!');
    showController.emit('magician-start', {
        magician: show.magician.values([
            'id', 'name', 'avatar', 'status', 'start', 'score', 'end'
        ])
    });
});

show.on('magician-score', function() {
    console.log('magician score!');
    showController.emit('magician-score', {
        magician: show.magician.values(['id', 'name', 'avatar', 'start', 'score', 'end'])
    });
});

show.on('magician-finish', function() {
    var magician = show.magician.map(['id', 'name', 'avatar', 'start', 'score', 'end']);
    magician.scores = show.magician.scores.slice(0, 2);
    showController.emit('magician-finish', {
        magician: magician
    });
});

show.on('score', function() {
    console.log('score');
    showController.emit('score');
});

show.on('finish', function() {
    console.log('show finished');
    showController.emit('finish');
});
