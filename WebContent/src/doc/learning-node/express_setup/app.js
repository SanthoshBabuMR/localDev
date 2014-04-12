
/**
 * Module dependencies.
 */

var express = require("express");

var app = express();

app.get("/", function(req, res) {
	res.send("Hello World !!")
});

app.listen(3030);
console.log("server listening on port 3030");
