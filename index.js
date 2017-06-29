var express = require("express");
var bodyParser = require("body-parser");
// for homemade modules, you have to use exact path
// our datemaker is in root so we do ./datemaker
var makeDate = require("./dateMaker")
var app = express();

console.log(makeDate(10));





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/instagrams", function(req, res) {
  res.send("Hello There!");
});

app.post("/instagrams", function(req, res) {
  res.send("hello from post");
});

// this must be the last bit of code, other stuff won't run after listen.
var server = app.listen(3002, function() {
  console.log("Listening on port 3002",);
});
