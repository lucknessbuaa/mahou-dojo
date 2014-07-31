var util = require("util");
var events = require("events");
var _ = require("underscore");

function Magician(magician, now) {
    events.EventEmitter.call(this);
    _.extend(this, magician);

    var now = now || new Date();

    if (now.getTime() < this.start.getTime()) {
        this.status = Magician.STATUS_WAITING;
    } else if (now.getTime() < this.score.getTime()) {
        this.status = Magician.STATUS_PLAYING;
    } else if (now.getTime() < this.end.getTime()) {
        this.status = Magician.STATUS_SCORE;
    } else {
        this.status = Magician.STATUS_FINISHED;
    }
};

util.inherits(Magician, events.EventEmitter);

Magician.prototype.loop = function(now) {
    if (this.status === Magician.STATUS_WAITING) {
        if (now.getTime() < this.start.getTime()) {
            return;
        }

        return this.onStart();
    } else if (this.status === Magician.STATUS_PLAYING) {
        if (now.getTime() < this.score.getTime()) {
            return;
        }

        return this.onScore();
    } else if (this.status === Magician.STATUS_SCORE) {
        if (now.getTime() < this.end.getTime()) {
            return;
        }

        return this.onFinish();
    } else {
        console.error('Never come here! My magic show is finished!');
    }
};

Magician.prototype.onStart = function() {
    this.status = Magician.STATUS_PLAYING;
    this.emit('start');
}

Magician.prototype.onScore = function() {
    this.status = Magician.STATUS_SCORE;
    this.emit('score');
}

Magician.prototype.onFinish = function() {
    this.status = Magician.STATUS_FINISHED;
    this.emit('finish', this.scores);
}

Magician.STATUS_WAITING = "waiting";
Magician.STATUS_PLAYING = "playing";
Magician.STATUS_SCORE = "score";
Magician.STATUS_FINISHED = "finished";

function Show(round, now) {
    events.EventEmitter.call(this);

    now = now || new Date();

    this.showStatus = Show.SHOW_WAITING;
    this.start = round.start;
    this.score = round.score;
    this.end = round.end;
    this.magicians = round.magicians.map(function(data) {
        return new Magician(data, now);
    });

    if (now.getTime() < this.start.getTime()) {
        this.showStatus = Show.SHOW_WAITING;
    } else if (now.getTime() < this.score.getTime()) {
        this.showStatus = Show.SHOW_PLAYING;
    } else if (now.getTime() < this.end.getTime()) {
        this.showStatus = Show.SHOW_SCORE;
    } else {
        this.showStatus = Show.SHOW_FINISHED;
    }
}

util.inherits(Show, events.EventEmitter);

Show.prototype.isFinished = function() {
    return this.showStatus === Show.SHOW_FINISHED;
}

Show.prototype.onStart = function() {
    this.showStatus = Show.SHOW_PLAYING;
    this.emit('start');
}

Show.prototype.onScore = function() {
    this.showStatus = Show.SHOW_SCORE;
    this.emit('score');
}

Show.prototype.onFinish = function() {
    this.showStatus = Show.SHOW_FINISHED;
    this.emit('finish');
}

Show.prototype.findMagician = function(now) {
    return _.find(this.magicians, function(magician) {
        return now.getTime() < magician.end.getTime();
    });
}

Show.prototype.onMagicianStart = function() {
    this.emit('magician-start');
}

Show.prototype.onMagicianScore = function() {
    this.emit('magician-score');
}

Show.prototype.onMagicianFinish = function() {
    this.magician = null;
    this.emit('magician-finshed');
}

Show.prototype.changeMagician = function(magician) {
    this.magician = magician;
    magician.once('start', this.onMagicianStart.bind(this));
    magician.once('score', this.onMagicianScore.bind(this));
    magician.once('finish', this.onMagicianFinish.bind(this));
    this.emit('magician-changed', magician);
}

Show.prototype.loop = function(now) {
    var now = now || new Date();

    if (this.isFinished()) {
        return;
    }

    if (this.showStatus === Show.SHOW_WAITING) {
        if (now.getTime() < this.start.getTime()) {
            return;
        }

        if (now.getTime() < this.score.getTime()) {
            return this.onStart();
        }

        if (now.getTime() < this.end.getTime()) {
            return this.onScore();
        }

        return this.onFinish();
    } else if (this.showStatus === Show.SHOW_PLAYING) {
        if (now.getTime() >= this.score.getTime()) {
            return this.onScore();
        }

        if (!this.magician) {
            var magician = this.findMagician(now);
            if (!magician) {
                // no left magicians
                return;
            }

            this.changeMagician(magician);
        }

        this.magician.loop(now);
    } else {
        if (now.getTime() < this.end.getTime()) {
            return;
        }

        return this.onFinish();
    }
};

Show.prototype.launch = function() {
    var PERIOD = 500;

    function check() {
        this.loop(new Date());

        setTimeout(check.bind(this), PERIOD);
    }

    setTimeout(check.bind(this), PERIOD);
};

Show.SHOW_WAITING = "waiting";
Show.SHOW_PLAYING = "playing";
Show.SHOW_SCORE = "score";
Show.SHOW_FINISHED = "finished";

module.exports = Show;
Show.Magician = Magician;
_.extend(Show, {
    ACE: 0,
    THREE: 3,
    FIVE: 5,
    SEVEN: 7,
    NINE: 9,
    JACK: 11,
    KING: 13
});