var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/instagram", function(req, res) {
  res.send("Hello There!");
});

var server = app.listen(3002, function() {
  console.log("Listening on port 3002",);
});
