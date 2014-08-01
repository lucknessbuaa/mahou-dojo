define(function(require) {
    require("jquery");
    require("velocity");
    var constant = require("js/constant");
    var Backbone = require("backbone");

    var Timer = require("js/timer");
    var token = require("js/token");
    var io = require("socket-io");

    var host = window.location.hostname;
    var socket = io.connect('http://' + host + '/show');

    function MagicianView(el, cardSelection) {
        this.selection = cardSelection;
        this._accuracy = 0;
        this.el = el;
        this.$el = $(el);
        this.$avatar = this.$el.find('.magician-avatar');
        this.$name = this.$el.find('.magician-name');

        this.selection.on('change', _.bind(function() {
            if (this._accuracy === this.selection.accuracy) {
                return;
            }

            var percent = (30 + this._accuracy * 14) + '%';
            this.$el.find('.frontend').css('height', percent);
        }, this));
    }

    MagicianView.prototype.setMagician = function(magician) {
        if (magician) {
            this.$avatar.hide().attr('src', magician.avatar).velocity('fadeIn');
            this.$name.html(magician.name);
        } else {
            this.$avatar.hide();
            this.$name.empty();
        }
    };

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

    var JudgeView = function(el, cardSelection) {
        this.selection = cardSelection;
        this.el = el;
        this.$el = $(el);
    }

    JudgeView.prototype.showScore = function(scores) {
        for (var i = 0; i < scores.length; i++) {
            var $judge = this.$el.find('.judge:eq(' + i + ')');
            var score = constant.score(scores[i]);
            var className = "card " + score;
            var selectedScore = this.selection.get(String(this.magician.id));
            if (selectedScore === score) {
                className += " bingo highlighted";
            }
            console.log('showScore, className:', className);
            $judge.find('.card')[0].className = className;
        }
    }

    JudgeView.prototype.setMagician = function(magician) {
        setTimeout(_.bind(function() {
            this.$el.find(".card").attr('class', 'card close');
        }, this), 2000);
        this.magician = magician;
    }

    var CardSelection = Backbone.Model.extend({
        score: function(magicianid, score) {
            this.set(magicianId, score);
        },

        isScoreSelected: function(score) {
            _.find(this.keys(), _.bind(function(key) {
                return this.get(key) === score;
            }, this));
        }
    });

    function CardSelector(el, cardSelection) {
        this.cardSelection = cardSelection;
        this.el = el;
        this.$el = $(el);

        var self = this;

        this.$el.find('div.card').click(function() {
            var $this = $(this);
            if ($this.hasClass('close')) {
                return;
            }

            var enable = self.magician &&
                self.magician.status === MAGICIAN_PLAYING &&
                !self.cardSelection.has(String(self.magician.id));

            if (!enable) {
                return;
            }

            var score = $this.data('score');
            if (!$this.hasClass('highlighted')) {
                self.$el.find('.highlighted').removeClass('highlighted');
                $this.addClass('highlighted');
            } else {
                self.cardSelection.set(String(self.magician.id), score);
            }
        });

        this.cardSelection.on('change', _.bind(function() {
            if (!this.magician) {
                return;
            }

            var score = this.cardSelection.get(String(this.magician.id));
            this.$el.find('.' + score)
                .addClass('highlighted')
                .addClass('selected');
        }, this));

        _.extend(this, Backbone.Events);
    }

    CardSelector.prototype.setMagician = function(magician) {
        if (this.magician) {
            var _magician = this.magician;
            setTimeout(_.bind(function() {
                var score = this.cardSelection.get(String(_magician.id))
                if (score) {
                    this.$el.find('.' + score)
                        .removeClass('highlighted')
                        .removeClass('selected')
                        .addClass('close');
                }
            }, this), 2000);
        }

        this.magician = magician;
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

    var cardSelection = new CardSelection();
    cardSelection.on('change', function() {
        // TODO sync selection 
    });
    var cardSelector;
    var judgeView;
    var magicianView;


    function onPlay(show) {
        showStatus = show.status;
        magician = show.magician;
        console.log(magician);

        cardSelector.setMagician(magician);
        judgeView.setMagician(magician);
        magicianView.setMagician(magician);
        timer.setMagician(magician);

        $show.show();
    }

    function onScore() {

    }

    function onFinish() {

    }

    $(function() {
        timer = new Timer($(".timer")[0]);
        $show = $("#show");
        cardSelector = new CardSelector($(".cards-wrapper")[0], cardSelection);
        judgeView = new JudgeView($(".judge-list")[0], cardSelection);
        magicianView = new MagicianView($(".magician")[0], cardSelection);

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
                        // TODO possible?
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

            socket.on('score', function() {
                console.log('score');
            });

            socket.on('magician-changed', function(magician) {
                console.log('magician changed');
                console.log(magician);
                cardSelection.setMagician(magician);
                judgeView.setMagician(magician);
                timer.setMagician(magician);
            });

            socket.on('magician-start', function(magician) {
                console.log('magician start');
                console.log(magician);
                _.extend(cardSelector.magician, magician);
                timer.setMagician(magician);
            });

            socket.on('magician-score', function(magician) {
                console.log('magician score');
                _.extend(cardSelector.magician, magician);
                timer.setMagician(magician);
            });

            socket.on('magician-finish', function(magician) {
                console.log('magician finish');
                console.log(magician);
                judgeView.showScore(magician.scores);
                timer.setMagician(magician);
            });

            socket.on('finish', function(data) {
                console.log('The show is finished');
                // TODO
                // window.location = '/score';
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