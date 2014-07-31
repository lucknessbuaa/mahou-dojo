define(function(require) {
    var uuid = require("uuid");

    var token = localStorage.getItem("audience-token");
    if (!token) {
        token = uuid.v4();
        localStorage.setItem("audience-token", uuid);
    }

    return token;
});