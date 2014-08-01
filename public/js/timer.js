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

    Timer.prototype.setMagician = function(magician) {
        switch (magician.status) {
            case constant.MAGICIAN_WAITING:
                this.timing('wait-magician', magician.start);
                break;
            case constant.MAGICIAN_PLAYING:
                this.timing('playing', magician.score);
                break;
            case constant.MAGICIAN_SCORE:
                this.timing('score', magician.end);
                break;
        }
    };

    return Timer;
});