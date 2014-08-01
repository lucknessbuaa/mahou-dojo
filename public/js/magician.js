define(function(require) {
    require("jquery");
    require("velocity");
    var Timer = require("js/timer");
    var token = require("js/token");
    var io = require("socket-io");

    var host = window.location.hostname;
    var socket = io.connect('http://' + host + '/show');

    function score(magicianId, score) {
        function sendScore(magicianId, score) {
            socket.emit('score', {
                token: token,
                magicianId: magicianId,
                score: score
            });
        }

        var scores = JSON.parse(localstorage.getItem('scores-' + token));
        scores[String(magicianId)] = score;
        localstorage.setItem(JSON.stringify(scores));
        sendScore(magicianId, score);
    }

    function CardSelector(el) {
        this.el = el;
        this.$el = $(el);
    }

    CardSelector.prototype.select = function(score) {
        
    }

    var SHOW_WAITING = 'waiting';
    var SHOW_PLAYING = 'playing';
    var SHOW_SCORE = 'score';
    var SHOW_FINISHED = 'finished';

    var MAGICIAN_WAITING = 'waiting';
    var MAGICIAN_PLAYING = 'playing';
    var MAGICIAN_SCORE = 'score';
    var MAGICIAN_FINISHED = 'finished';

    var timer, $show;
    var magician;
    var showStatus;

    function onWait() {
        window.location = '/wait';
    }

    function onPlay(show) {
        showStatus = show.status;
        magician = show.magician;

        if (magician.status === MAGICIAN_WAITING) {
            timer.timing('wait-magician', magician.start);
            $show.find('.magician-avatar').hide();
            $show.find('.magician-name').empty();
        } else if (magician.status === MAGICIAN_PLAYING) {
            timer.timing('playing', magician.score);
            $show.find('.magician-avatar').hide()
                .attr('src', magician.avatar).velocity('fadeIn');
            $show.find('.magician-name').html(magician.name);
        } else if (magician.status === MAGICIAN_SCORE) {
            timer.timing('score', magician.end);
        } else {
            $show.find('.magician-avatar').hide();
            $show.find('.magician-name').empty();
            // TODO magnipulate cards
        }

        $show.show();
    }

    function onScore() {

    }

    function onFinish() {

    }

    $(function() {
        timer = new Timer($(".timer")[0]);
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