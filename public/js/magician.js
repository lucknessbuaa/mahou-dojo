define(function(require) {
    require("jquery");
    require("velocity");
    var _ = require("underscore");
    var constant = require("js/constant");
    var Backbone = require("backbone");

    var Timer = require("js/timer");
    var token = require("js/token");
    var io = require("socket-io");

    var magicians = [];

    var host = window.location.hostname;
    var socket = io.connect('http://' + host + '/show');

    function __error(fn) {
        return function() {
            try {
                fn.apply(this, arguments);
            } catch (e) {
                console.error(e);
                throw e;
            }
        }
    }

    function MagicianView(el, cardSelection) {
        this.selection = cardSelection;
        this.el = el;
        this.$el = $(el);
        this.$avatar = this.$el.find('.magician-avatar');
        this.$name = this.$el.find('.magician-name');
        this.$accuracy = this.$el.find(".accuracy-percent");
        this.ensureAccuracy();

        this.selection.on('change:accuracy', _.bind(function() {
            console.log('accuracy changed:', this.selection.get('accuracy'));
            this.ensureAccuracy();
        }, this));

        showModel.on('magician-switched', _.bind(function() {
            console.log('MagicianView: magician changed');
            this.magician = showModel.get('magician');

            this.magician.on('start', _.bind(function() {
                this.showMagician();
            }, this));

            this.magician.on('score', _.bind(function() {
                if (this.$avatar.css('display') === 'none') {
                    this.showMagician();
                }
            }, this));

            this.magician.on('scored', _.bind(function() {
                if (this.$avatar.css('display') === 'none') {
                    this.showMagician();
                }

                var accuracy = this.selection.get('accuracy') || 0;
                var score = this.selection.get(String(this.magician.get('id')));
                _.each(this.magician.get('scores'), function(_score) {
                    if (score === constant.score(_score)) {
                        accuracy++;
                    }
                });
                this.selection.set('accuracy', accuracy);
            }, this));
        }, this));
    }

    MagicianView.prototype.ensureAccuracy = function() {
        var accuracy = this.selection.get('accuracy') || 0;
        var percent = (40 + accuracy / 18 * 60) + '%';
        this.$el.find('.frontend').hide().css('height', percent).show();
        this.$accuracy.html((accuracy / 18 * 100).toFixed(1) + '%');
    }

    MagicianView.prototype.showMagician = function() {
        this.$avatar.hide()
            .attr('src', this.magician.get('avatar'))
            .velocity('fadeIn');
        this.$name.html(this.magician.get('name'));
    }

    function saveCardSelection(showId) {
        var key = 'scores-' + showId + '-' + token;
        localStorage.setItem(key, JSON.stringify(cardSelection.toJSON()));

        socket.emit('add-score', {
            id: showId,
            token: token,
            score: cardSelection.toJSON()
        });
    }

    function readCardSelection(showId) {
        var key = 'scores-' + showId + '-' + token;
        var data = localStorage.getItem(key);
        return data ? JSON.parse(data) : {};
    }

    var JudgeView = function(el, cardSelection) {
        this.selection = cardSelection;
        this.el = el;
        this.$el = $(el);
        this.$cards = this.$el.find(".card");

        showModel.on('magician-switched', _.bind(function() {
            var _magician = this.magician;
            this.magician = showModel.get('magician');
            this.magician.once('start', _.bind(function() {
                if (_magician) {
                    this.$cards.attr('class', 'card close');
                }
            }, this));

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
            }, this));
        }, this));
    }

    var CardSelection = Backbone.Model.extend({
        score: function(id, score) {
            this.set(String(id), score);
        },

        findScore: function(score) {
            return _.find(this.keys(), _.bind(function(key) {
                return key !== 'accuracy' && this.get(key) === score;
            }, this));
        }
    });

    function CardSelector(el, cardSelection) {
        this.cardSelection = cardSelection;

        this.el = el;
        this.$el = $(el);
        this.$cards = this.$el.find('.card');

        var self = this;
        this.ensureCards();

        showModel.on('magician-switched', _.bind(function() {
            var _magician = this.magician;

            this.magician = showModel.get('magician');
            this.magician.once('start', _.bind(function() {
                this.ensureCards();
            }, this));

            this.magician.once('scored', _.bind(function() {
                this.ensureCards();
            }, this));
        }, this));

        function onCardTap() {
            var $this = $(this);
            if ($this.hasClass('close')) {
                return;
            }

            var enable = self.magician &&
                (self.magician.isPlaying() || self.magician.isScoring()) &&
                !self.cardSelection.has(String(self.magician.get('id')));

            if (!enable) {
                return;
            }

            var score = $this.data('score');
            if (!$this.hasClass('highlighted')) {
                self.$el.find('.highlighted').removeClass('highlighted');
                $this.addClass('highlighted');
            } else {
                self.cardSelection.score(self.magician.id, score);
            }
        }

        if (this.$cards.tap) {
            this.$cards.tap(onCardTap);
        } else {
            this.$cards.click(onCardTap);
        }

        this.cardSelection.on('change', _.bind(function() {
            if (!this.magician) {
                return;
            }

            this.ensureCards();
        }, this));

        _.extend(this, Backbone.Events);
    }

    CardSelector.prototype.ensureCards = function() {
        this.$cards.removeClass('highlighted').removeClass('selected');

        [constant.scores.ACE, constant.scores.THREE,
            constant.scores.FIVE, constant.scores.SEVEN,
            constant.scores.NINE, constant.scores.JACK, constant.scores.KING
        ].forEach(_.bind(function(score) {

            score = constant.score(score);
            var magicianId = this.cardSelection.findScore(score);
            if (!magicianId) {
                return;
            }

            if (this.magician &&
                this.magician.get('id') == magicianId &&
                this.magician.get('status') !== constant.MAGICIAN_WAITING) {

                this.$el.find('.' + score)
                    .removeClass('close')
                    .addClass('highlighted')
                    .addClass('selected');

            } else {
                this.$el.find('.' + score)
                    .removeClass('highlighted')
                    .removeClass('selected')
                    .addClass('close');
            }
        }, this));
    }

    CardSelector.prototype.clearHighlight = function() {
        this.$cards.removeClass('highlighted');
    }

    var ShowModel = Backbone.Model.extend({
        setMagician: function(magician) {
            this.set('magician', magician);
            this.trigger('magician-switched');
        }
    });

    var MagicianModel = Backbone.Model.extend({
        initialize: function(options) {
            this.set(options);
        },

        isPlaying: function() {
            return this.get('status') === constant.MAGICIAN_PLAYING;
        },

        isScoring: function() {
            return this.get('status') === constant.MAGICIAN_SCORE;
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


    var cardSelector;
    var judgeView;
    var magicianView;

    function onPlay(show) {
        cardSelection.set(readCardSelection(show.id));
        cardSelection.on('change', function() {
            saveCardSelection(show.id);
        });

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
                case constant.MAGICIAN_SCORE:
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

            socket.on('score', __error(function(show) {
                console.log('score');
                onScore(show);
            }));

            socket.on('magician-changed', __error(function(magician) {
                console.log('magician changed---------------');
                var _magician = showModel.get('magician');
                if (_magician) {
                    magicians.push(_magician);
                }

                console.log(magician);
                showModel.setMagician(new MagicianModel(magician));
                console.log('---------------magician changed');
            }));

            socket.on('magician-start', __error(function(magician) {
                console.log('magician start---------------');
                console.log(magician);
                showModel.get('magician').set(magician);
                showModel.get('magician').start();
                console.log('---------------magician start');
            }));

            socket.on('magician-score', __error(function(magician) {
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
            }));

            socket.on('magician-finish', __error(function(magician) {
                console.log('magician finish-------------');
                console.log(magician);
                showModel.get('magician').set(magician);
                showModel.get('magician').finish();
                console.log('-------------magician finish');
            }));

            socket.on('finish', __error(function(data) {
                console.log('The show is finished');
                onFinish();
            }));
        });

        socket.on('connect_error', function(err) {
            console.error(err);
        });

        socket.on('connect_timeout', function(err) {
            console.error('connect timeout!');
        });
    });
});