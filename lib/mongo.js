var MongoClient = require("mongodb").MongoClient;

module.exports = {
    db: null,
    connect: function(callback) {
        var self = this;
        MongoClient.connect("mongodb://localhost:27017/mahou", function(err, db) {
            if (err) {
                return callback(err);
            }

            self.db = db;
            callback(null, self.db);
        });
    }
}