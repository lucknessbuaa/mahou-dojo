define(function(require) {
    require("zepto");
    var io = require("socket-io");

    var host = 'localhost:4000';
    var socket = io.connect('http://' + host + '/show');

    var SHOW_WAITING = 'waiting';
    var SHOW_PLAYING = 'playing';
    var SHOW_SCORE = 'score';
    var SHOW_FINISHED = 'finished';

    var MAGICIAN_WAITING = 'waiting';
    var MAGICIAN_PLAYING = 'playing';
    var MAGICIAN_SCORE = 'score';
    var MAGICIAN_FINISHED = 'finished';

    var $timer, $show;
    var magician;
    var showStatus;

    function onWait() {
        $timer.show();
    }

    function onPlay(show) {
        $timer.hide();
        showStatus = show.status;
        magician = show.magician;
        $show.find('.magician-avatar').attr('src', magician.avatar);
        $show.find('.magician-name').html(magician.name);
        $show.show();
    }

    function onScore() {

    }

    function onFinish() {

    }

    $(function() {
        $timer = $("#timer");
        $show = $("#show");

        socket.on('connect', function() {
            var cb_map = {};

            function queryStatus(callback) {
                var id = new Date().getTime();
                socket.emit('query', {
                    data: 'status',
                    id: id
                });

                cb_map[String(id)] = callback;
            }

            socket.on('query', function(data) {
                var cb = cb_map[String(data.id)];
                if (!cb) {
                    return;
                }

                delete cb_map[String[data.id]];
                cb.call(null, data.result);
            });

            queryStatus(function(show) {
                switch (show.status) {
                    case SHOW_WAITING:
                        onWait();
                        break;
                    case SHOW_PLAYING:
                        onPlay(show);
                        break;
                    case SHOW_SCORE:
                        onScore();
                        break;
                    case SHOW_FINISHED:
                    default:
                        onFinish();
                        break;
                }
            });

            socket.on('start', function() {
                console.log('start');
            });

            socket.on('score', function() {
                console.log('score');
            });

            socket.on('magician-changed', function(magician) {
                console.log('magician changed');
                console.log(magician);
            });

            socket.on('magician-start', function(magician) {
                console.log('magician start');
                console.log(magician);
            });

            socket.on('magician-score', function(magician) {
                console.log('magician score');
                console.log(magician);
            });

            socket.on('finish', function(data) {
                console.log('The show is finished');
            });
        });

        socket.on('connect_error', function(err) {
            console.error(err);
        });

        socket.on('connect_timeout', function(err) {
            console.error('connect timeout!');
        });
    });
});