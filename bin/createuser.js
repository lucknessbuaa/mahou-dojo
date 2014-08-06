#!/usr/bin/env node

var chalk = require('chalk');
var args = require('minimist')(process.argv.slice(2));

var cryptoPassword = require('../lib/encrypt-password');
var mongo = require("../lib/mongo");

mongo.connect(function(err, db) {
    if (err) throw err;

    db.collection('user', function(err, user) {
        if (err) throw err;

        user.ensureIndex({
            username: 1
        }, {
            unique: true
        }, function(err) {
            if (err) throw err;

            user.insert({
                username: args.u,
                password: args.p
            }, {
                safe: true
            }, function(err) {
                if (err) throw err;

                console.log(chalk.green('Done!'));

                db.close();
            })
        });
    });
});