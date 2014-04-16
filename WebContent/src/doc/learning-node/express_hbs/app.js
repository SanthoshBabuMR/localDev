
/**
 * Module dependencies.
 */

var express = require("express");
var path = require('path');
var routes = require("./routes");
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get("/", routes.index);
app.get("/welcome", routes.welcome);

app.listen(3030);
console.log("server listening on port 3030");
