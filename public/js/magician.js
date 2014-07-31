define(function(require) {
    require("jquery");
    require("velocity");
    var token = require("js/token");
    var io = require("socket-io");

    var host = 'localhost:4000';
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
        // FIXME
    }

    function Timer(el) {
        this.el = el;
        this.$el = $(el);
        this.$inner = this.$el.find(".timer-inner");

        setInterval(this.ensure.bind(this), 1000);
    }

    Timer.prototype.ensure = function() {
        if (!this.type) {
            return this.$inner.empty();
        }

        var now = new Date();
        var seconds, minutes;
        if (this.time < now.getTime()) {
            seconds = 0;
            minutes = 0;
        } else {
            seconds = Math.floor(this.time - now.getTime() / 1000);
            minutes = Math.floor(seconds / 60) % 60;
            seconds = seconds % 60;
        }

        this.$inner.html(this.pad(minutes) + ":" + this.pad(seconds));
    };

    Timer.prototype.pad = function(number) {
        return number < 10 ? '0' + number : String(number);
    }

    Timer.prototype.timing = function(type, time) {
        this.el.className = 'timer ' + type;
        this.type = type;
        this.time = time;
    };

    function onPlay(show) {
        showStatus = show.status;
        magician = show.magician;
        $show.find('.magician-avatar').hide()
            .attr('src', magician.avatar).velocity('fadeIn');
        $show.find('.magician-name').html(magician.name);

        if (magician.status === MAGICIAN_WAITING) {
            timer.timing('wait', magician.start);
        } else if (magician.status === MAGICIAN_PLAYING) {
            timer.timing('playing', magician.score);
        } else if (magician.status === MAGICIAN_SCORE) {
            timer.timing('score', magician.end);
        } else {
            // TODO on magician finished
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