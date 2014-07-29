var PORT = 4000;
var argv = require("minimist")(process.argv.slice(2), {
	string: ['port'],
	alias: {
		port: 'p'
	},
	default: {
		port: PORT
	}
});
var express = require("express");

var app = express();
port = argv.port || PORT;
app.listen(port, function() {
	console.log("listening on port", port);
});
