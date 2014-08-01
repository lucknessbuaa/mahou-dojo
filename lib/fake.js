var datetime = require("./datetime");
var Show = require("./show");

var CURRENT_ROUND = 0;

var _date = function(minutes) {
    return datetime(2014, 8, 1, 14, 40 + minutes);
}

var UNIT = 2;

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

module.exports = round;
