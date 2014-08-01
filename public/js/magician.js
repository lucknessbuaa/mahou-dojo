define(function(require) {
    require("jquery");
    require("velocity");
    var _ = require("underscore");
    var constant = require("js/constant");
    var Backbone = require("backbone");

    var Timer = require("js/timer");
    var token = require("js/token");
    var io = require("socket-io");

    var host = window.location.hostname;
    var socket = io.connect('http://' + host + '/show');

    function MagicianView(el, cardSelection) {
        this.selection = cardSelection;
        this.el = el;
        this.$el = $(el);
        this.$avatar = this.$el.find('.magician-avatar');
        this.$name = this.$el.find('.magician-name');
        this.$accuracy = this.$el.find(".accuracy-percent");

        this.selection.on('change:accuracy', _.bind(function() {
            console.log('accuracy changed:', this.selection.get('accuracy'));
            var accuracy = this.selection.get('accuracy');
            var percent = (40 + accuracy * 10) + '%';
            this.$el.find('.frontend').css('height', percent);
            this.$accuracy.html((accuracy / 6 * 100).toFixed(0) + '%');
        }, this));

        showModel.on('magician-swtiched', _.bind(function() {
            console.log('MagicianView: magician changed');
            this.magician = showModel.get('magician');

            this.$avatar.hide()
                .attr('src', this.magician.get('avatar'))
                .velocity('fadeIn');
            this.$name.html(this.magician.get('name'));
        }, this));
    }

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
        this.$cards = this.$el.find(".card");

        showModel.on('magician-swtiched', _.bind(function() {
            this.magician = showModel.get('magician');

            this.magician.once('scored', _.bind(function() {
                var scores = this.magician.get('scores');
                _.each(scores, _.bind(function(score, index) {
                    var $judge = this.$el.find('.judge:eq(' + index + ')');
                    score = constant.score(score);
                    var className = "card " + score;
                    var selectedScore = this.selection.get(String(this.magician.id));
                    if (selectedScore === score) {
                        className += " bingo highlighted";
                    }
                    console.log('showScore, className:', className);
                    $judge.find('.card')[0].className = className;
                }, this));

                setTimeout(_.bind(function() {
                    this.$cards.attr('class', 'card close');
                }, this), 2000);
            }, this));
        }, this));
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
        this.$cards = this.$el.find('.card');

        var self = this;

        showModel.on('magician-swtiched', _.bind(function() {
            this.magician = showModel.get('magician');

            this.magician.once('score', _.bind(function() {
                var score = this.cardSelection.get(String(this.magician.get('id')))
                if (!score) {
                    this.clearHighlight();
                }
            }, this));

            this.magician.once('scored', _.bind(function() {
                var _magician = this.magician;


                var score = this.cardSelection.get(String(_magician.get('id')))
                if (score && this.magician.get('scores').indexOf(constant.reverseScore(score)) !== -1) {
                    var accuracy = this.cardSelection.get('accuracy') || 0;
                    this.cardSelection.set('accuracy', accuracy + 1);
                }

                setTimeout(_.bind(function() {
                    var score = this.cardSelection.get(String(_magician.get('id')))
                    if (!score) {
                        return;
                    }

                    this.$el.find('.' + score)
                        .removeClass('highlighted')
                        .removeClass('selected')
                        .addClass('close');

                }, this), 2000);
            }, this));
        }, this));

        this.$el.find('div.card').click(function() {
            var $this = $(this);
            if ($this.hasClass('close')) {
                return;
            }

            var enable = self.magician &&
                self.magician.get('status') === constant.MAGICIAN_PLAYING &&
                !self.cardSelection.has(String(self.magician.get('id')));

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

    CardSelector.prototype.clearHighlight = function() {
        this.$cards.removeClass('highlighted');
    }

    var ShowModel = Backbone.Model.extend({
        setMagician: function(magician) {
            this.set('magician', magician);
            this.trigger('magician-swtiched');
        }
    });

    var MagicianModel = Backbone.Model.extend({
        initialize: function(options) {
            this.set(options);
        },

        start: function() {
            this.set('status', constant.MAGICIAN_PLAYING);
            this.trigger('start');
        },

        score: function() {
            this.set('status', constant.MAGICIAN_SCORE);
            this.trigger('score');
        },

        finish: function() {
            this.set('status', constant.MAGICIAN_FINISHED);
            this.trigger('scored');
        }
    });

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
    var showModel = new ShowModel();

    var cardSelection = new CardSelection();
    cardSelection.on('change', function() {
        // TODO sync selection 
    });
    var cardSelector;
    var judgeView;
    var magicianView;


    function onPlay(show) {
        showModel.set('status', show.status);
        if (show.magician) {
            showModel.setMagician(new MagicianModel(show.magician));
        }

        var magician = showModel.get('magician');
        if (magician) {
            switch (magician.get('status')) {
                case constant.MAGICIAN_PLAYING:
                    magician.start();
                    break;
                case constant.MAGICIAN_PLAYING:
                    magician.score();
                    break;
                case constant.MAGICIAN_FINISHED:
                    magician.finish();
                    break;
            }
        }
        $show.show();
    }

    function onScore(show) {
        timer.timing('final', show.end);
    }

    function onFinish() {
        window.location = '/score';
    }

    $(function() {
        $show = $("#show");
        timer = new Timer($(".timer")[0]);
        timer.setShowModel(showModel);
        cardSelector = new CardSelector($(".cards-wrapper")[0], cardSelection);
        judgeView = new JudgeView($(".judge-list")[0], cardSelection);
        magicianView = new MagicianView($(".magician")[0], cardSelection);
        var connected = false;

        socket.on('connect', function() {
            if (connected) {
                console.error('Connect event is duplicated!');
                return;
            }

            connected = true;
            console.log('socket connected');
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

                console.log('query callback', data.id, cb);

                if (!cb) {
                    return;
                }

                delete cb_map[String(data.id)];
                cb.call(null, data.result);
            });

            queryStatus(function(show) {
                switch (show.status) {
                    case SHOW_WAITING:
                        window.location = "/wait";
                        break;
                    case SHOW_PLAYING:
                        onPlay(show);
                        break;
                    case SHOW_SCORE:
                        onScore(show);
                        break;
                    case SHOW_FINISHED:
                    default:
                        onFinish();
                        break;
                }
            });

            socket.on('score', function(show) {
                console.log('score');
                onScore(show);
            });

            socket.on('magician-changed', function(magician) {
                console.log('magician changed---------------');
                console.log(magician);
                showModel.setMagician(new MagicianModel(magician));
                console.log('---------------magician changed');
            });

            socket.on('magician-start', function(magician) {
                console.log('magician start---------------');
                console.log(magician);
                showModel.get('magician').set(magician);
                showModel.get('magician').start();
                console.log('---------------magician start');
            });

            socket.on('magician-score', function(magician) {
                console.log(magician);
                console.log('magician score---------------');
                try {
                    console.log(showModel);
                    var cur_magician = showModel.get('magician');
                    if (cur_magician) {
                        cur_magician.set(magician);
                        cur_magician.score();
                    }
                } catch (e) {
                    console.error(e);
                }
                console.log('---------------magician score');
            });

            socket.on('magician-finish', function(magician) {
                console.log('magician finish-------------');
                console.log(magician);
                showModel.get('magician').set(magician);
                showModel.get('magician').finish();
                console.log('-------------magician finish');
            });

            socket.on('finish', function(data) {
                console.log('The show is finished');
                onFinish();
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