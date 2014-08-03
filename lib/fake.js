var datetime = require("./datetime");
var Show = require("./show");

var CURRENT_ROUND = 0;

var _date = function(seconds) {
    var date = datetime(2014, 8, 9, 19, 30, 0);
    return new Date(date.getTime() + seconds * 1000);
}

var UNIT = 20;
var count = 0;

var round = {
    start: _date(count++),
    magicians: [{
        first: true,
        id: 1,
        name: '陈志鹏 / 丁建中',
        start: _date((count+=2) * UNIT),
        avatar: '/img/magician-avatar-1.png',
        score: _date(count++ * UNIT),
        end: _date((count+=10) * UNIT),
        scores: [Show.ACE, Show.THREE, Show.KING]
    }, {
        id: 2,
        name: '郭汛杰 / 阿牛',
        start: _date(count++ * UNIT),
        avatar: '/img/magician-avatar-2.png',
        score: _date(count++ * UNIT),
        end: _date(count++ * UNIT),
        scores: [Show.THREE, Show.KING, Show.ACE]
    }, {
        id: 3,
        name: '杨洪基 / 凯特琳',
        start: _date(count++ * UNIT),
        avatar: '/img/magician-avatar-3.png',
        score: _date(count++ * UNIT),
        end: _date(count++ * UNIT),
        scores: [Show.FIVE, Show.SEVEN, Show.THREE]
    }, {
        id: 4,
        name: '高虎 / 王子妃',
        start: _date(count++ * UNIT),
        avatar: '/img/magician-avatar-4.png',
        score: _date(count++ * UNIT),
        end: _date(count++ * UNIT),
        scores: [Show.SEVEN, Show.ACE, Show.FIVE]
    }, {
        id: 5,
        name: '叶童 / 谭永铨',
        start: _date(count++ * UNIT),
        avatar: '/img/magician-avatar-5.png',
        score: _date(count++ * UNIT),
        end: _date(count++ * UNIT),
        scores: [Show.NINE, Show.JACK, Show.SEVEN]
    }, {
        id: 6,
        name: '萧蔷 / 傅琰东',
        start: _date(count++ * UNIT),
        avatar: '/img/magician-avatar-6.png',
        score: _date(count++ * UNIT),
        end: _date(count++ * UNIT),
        scores: [Show.NINE, Show.JACK, Show.SEVEN]
    }],
    score: _date(count * UNIT),
    end: _date(count++ * UNIT),
};

module.exports = round;
