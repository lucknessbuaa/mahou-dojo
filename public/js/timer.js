define(function(require) {
    var constant = require("js/constant");

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
            seconds = Math.floor((this.time - now.getTime()) / 1000);
            minutes = Math.floor(seconds / 60) % 60;
            seconds = seconds % 60;
        }

        this.$inner.html(this.pad(minutes) + ":" + this.pad(seconds));
    };

    Timer.prototype.pad = function(number) {
        return number < 10 ? '0' + number : String(number);
    }

    Timer.prototype.timing = function(type, time) {
        console.log('type:', type, 'time:', time);
        this.el.className = 'timer ' + type;
        this.type = type;
        this.time = time;
    };

    Timer.prototype.setShowModel = function(showModel) {
        this.showModel = showModel;
        this.showModel.on('magician-swtiched', _.bind(function() {
            this.magician = showModel.get('magician');

            switch (this.magician.get('status')) {
                case constant.MAGICIAN_WAITING:
                    this.timing('wait-magician', this.magician.get('start'));
                    break;
                case constant.MAGICIAN_PLAYING:
                    this.timing('playing', this.magician.get('score'));
                    break;
                case constant.MAGICIAN_SCORE:
                    this.timing('score', this.magician.get('end'));
                    break;
            }

            this.magician.once('start', _.bind(function() {
                var timestamp = this.magician.get('score');
                console.log(new Date(timestamp));
                this.timing('playing', timestamp);
            }, this));

            this.magician.once('score', _.bind(function() {
                var timestamp = this.magician.get('end');
                console.log(new Date(timestamp));
                this.timing('score', timestamp);
            }, this));
        }, this));
    }

    return Timer;
});