var assert = require("assert");
var Show = require("./lib/show");
var _date = require("./lib/datetime")(2014, 6, 31);

var magicianA = {
    name: 'A',
    start: _date(8, 2),
    score: _date(8, 4),
    end: _date(8, 6),
    scores: [Show.ACE, Show.THREE, Show.KING]
};

var round = {
    start: _date(8),
    magicians: [magicianA, {
        name: 'B',
        start: _date(8, 6),
        score: _date(8, 8),
        end: _date(8, 10),
        scores: [Show.THREE, Show.KING, Show.ACE]
    }, {
        name: 'C',
        start: _date(8, 12),
        score: _date(8, 14),
        end: _date(8, 16),
        scores: [Show.FIVE, Show.SEVEN, Show.THREE]
    }, {
        name: 'D',
        start: _date(8, 18),
        score: _date(8, 20),
        end: _date(8, 22),
        scores: [Show.SEVEN, Show.ACE, Show.FIVE]
    }, {
        name: 'E',
        start: _date(8, 24),
        score: _date(8, 26),
        end: _date(8, 28),
        scores: [Show.NINE, Show.JACK, Show.SEVEN]
    }],
    score: _date(8, 28),
    end: _date(8, 30),
};

describe('Magician', function() {
    var Magician = Show.Magician;

    describe('#constructor', function() {
        var magician = new Magician(magicianA, _date(7, 55));
        assert.strictEqual(magician.status, Magician.STATUS_WAITING);

        magician = new Magician(magicianA, _date(8, 6));
        assert.strictEqual(magician.status, Magician.STATUS_FINISHED);

        magician = new Magician(magicianA, _date(8, 2));
        assert.strictEqual(magician.status, Magician.STATUS_PLAYING);

        magician = new Magician(magicianA, _date(8, 4));
        assert.strictEqual(magician.status, Magician.STATUS_SCORE);
    });

    /*
    describe('#loop', function() {
        var magician = new Magician(magicianA, _date(7, 55));
        magician.loop(_date(8, ));
    });
*/
});

describe('Show', function() {
    describe('#findMagician', function() {
        it("should find the first magician who' end time is later than now", function() {
            var show = new Show(round);
            var magician = show.findMagician(_date(8, 2));
            assert.equal(magician, show.magicians[0]);

            magician = show.findMagician(_date(8, 10));
            assert.equal(magician, show.magicians[2]);
        });
    });

    describe('#constructor', function() {
        it("should switch to the right status", function() {
            var show = new Show(round, _date(7, 55));
            assert.strictEqual(show.showStatus, Show.SHOW_WAITING);

            show = new Show(round, _date(8, 15));
            assert.strictEqual(show.showStatus, Show.SHOW_PLAYING);

            show = new Show(round, _date(8, 28));
            assert.strictEqual(show.showStatus, Show.SHOW_SCORE);

            show = new Show(round, _date(8, 30));
            assert.strictEqual(show.showStatus, Show.SHOW_FINISHED);
        });
    });

    describe("#loop", function() {
        it("should switch to the right status when time is fly", function() {
            var show = new Show(round, _date(7, 55));
            assert.strictEqual(show.showStatus, Show.SHOW_WAITING);

            show.loop(_date(8, 15));
            assert.strictEqual(show.showStatus, Show.SHOW_PLAYING);

            show.loop(_date(8, 15, 1));
            assert.strictEqual(show.showStatus, Show.SHOW_PLAYING);
            assert.strictEqual(show.magician, show.magicians[2]);
        });
    });
});