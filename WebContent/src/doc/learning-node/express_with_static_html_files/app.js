/*
 * Module Dependencies
 */

var express = require("express");
//var path = require("path");
var routes = require("./routes");
var app = express();

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');
//app.use(express.bodyParser()); // SECURITY ISSUE: http://andrewkelley.me/post/do-not-use-bodyparser-with-express-js.html

app.get("/",routes.index);
app.get("/profile",routes.profileList);
app.get("/profile/:name",routes.profileUser);

app.listen(3000);
console.log("server listening port 3000");