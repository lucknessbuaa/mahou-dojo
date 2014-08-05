#!/usr/bin/env node

var chalk = require("chalk");
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/mahou", function(err, db) {
    if (err) {
        return console.error(err);
    }

    db.createCollection('show', function(err, collection) {
        if (err) {
            return console.error(err);
        }

        var datetime = require("../lib/datetime");
        var Show = require("../lib/show");

        var CURRENT_ROUND = 0;

        var _date = function(minutes, seconds) {
            var date = datetime(2014, 8, 4, 18, 00, 00);

			seconds = seconds || 0;
			minutes = minutes || 0;
            return new Date(date.getTime() + minutes * 1000 * 60 + seconds * 1000);
        }

        var round = {
            id: 0,
            start: _date(),
            magicians: [{
                first: true,
                id: 1,
                name: '陈志鹏 / 丁建中',
                start: _date(0, 30),
                avatar: '/img/magician-avatar-1.png',
                score: _date(0, 45),
                end: _date(1, 0),
                scores: [Show.ACE, Show.THREE, Show.KING]
            }, {
                id: 2,
                name: '郭汛杰 / 阿牛',
                start: _date(1, 30),
                avatar: '/img/magician-avatar-2.png',
                score: _date(1, 45),
                end: _date(2, 0),
                scores: [Show.THREE, Show.KING, Show.ACE]
            }, {
                id: 3,
                name: '杨洪基 / 凯特琳',
                start: _date(2, 30),
                avatar: '/img/magician-avatar-3.png',
                score: _date(2, 45),
                end: _date(3, 0),
                scores: [Show.FIVE, Show.SEVEN, Show.THREE]
            }, {
                id: 4,
                name: '高虎 / 王子妃',
                start: _date(3, 30),
                avatar: '/img/magician-avatar-4.png',
                score: _date(3, 45),
                end: _date(4, 0),
                scores: [Show.SEVEN, Show.ACE, Show.JACK]
            }, {
                id: 5,
                name: '叶童 / 谭永铨',
                start: _date(4, 30),
                avatar: '/img/magician-avatar-5.png',
                score: _date(4, 45),
                end: _date(5, 0),
                scores: [Show.NINE, Show.JACK, Show.SEVEN]
            }, {
                id: 6,
                name: '萧蔷 / 傅琰东',
                start: _date(5, 30),
                avatar: '/img/magician-avatar-6.png',
                score: _date(5, 45),
                end: _date(55, 0),
                scores: [Show.JACK, Show.NINE, Show.FIVE]
            }],
            score: _date(60, 3),
            end: _date(70, 30),
        };

        collection.update({
            id: 0
        }, round, {
            upsert: true
        }, function(err) {
            if (err) {
                console.log(chalk.red('fail to update show'));
                return console.error(err);
            }

            console.log(chalk.green('OK!'));
            db.close();
        });
    });
});
