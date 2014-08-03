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

        var _date = function(seconds) {
            var date = datetime(2014, 8, 3, 12, 16, 50);
            return new Date(date.getTime() + seconds * 1000);
        }

        var UNIT = 20;

        var round = {
            id: 0,
            start: _date(0),
            magicians: [{
                first: true,
                id: 1,
                name: '陈志鹏 / 丁建中',
                start: _date(1 * UNIT),
                avatar: '/img/magician-avatar-1.png',
                score: _date(2 * UNIT),
                end: _date(3 * UNIT),
                scores: [Show.ACE, Show.THREE, Show.KING]
            }, {
                id: 2,
                name: '郭汛杰 / 阿牛',
                start: _date(4 * UNIT),
                avatar: '/img/magician-avatar-2.png',
                score: _date(5 * UNIT),
                end: _date(6 * UNIT),
                scores: [Show.THREE, Show.KING, Show.ACE]
            }, {
                id: 3,
                name: '杨洪基 / 凯特琳',
                start: _date(7 * UNIT),
                avatar: '/img/magician-avatar-3.png',
                score: _date(8 * UNIT),
                end: _date(9 * UNIT),
                scores: [Show.FIVE, Show.SEVEN, Show.THREE]
            }, {
                id: 4,
                name: '高虎 / 王子妃',
                start: _date(10 * UNIT),
                avatar: '/img/magician-avatar-4.png',
                score: _date(11 * UNIT),
                end: _date(12 * UNIT),
                scores: [Show.SEVEN, Show.ACE, Show.FIVE]
            }, {
                id: 5,
                name: '叶童 / 谭永铨',
                start: _date(13 * UNIT),
                avatar: '/img/magician-avatar-5.png',
                score: _date(14 * UNIT),
                end: _date(15 * UNIT),
                scores: [Show.NINE, Show.JACK, Show.SEVEN]
            }, {
                id: 6,
                name: '萧蔷 / 傅琰东',
                start: _date(16 * UNIT),
                avatar: '/img/magician-avatar-6.png',
                score: _date(17 * UNIT),
                end: _date(18 * UNIT),
                scores: [Show.NINE, Show.JACK, Show.SEVEN]
            }],
            score: _date(18 * UNIT),
            end: _date(19 * UNIT),
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