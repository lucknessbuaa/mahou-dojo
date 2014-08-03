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

        collection.findOne({id: 0}, function(err, item) {
            if(err) {
                return console.error(err);
            }

            console.log(chalk.green(JSON.stringify(item, null, 4)));
            db.close();
        });
    });
});