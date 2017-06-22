// index.js
// Date: 22 June 2017
var http = require('http');
// console.log(http);

// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type':'text/plain'});
//   response.end("Hello World!"); //fires when response is complete
// }).listen(3000, function() {
//   console.log("App is listening on port 3000")
// });

var express = require('express');
var app = express();

// res -- response, req -- request
// res determines what happens when we req something from a browser
app.get('/greeting', function(req, res) {
  res.send("You found the greeting endpoint!")
});

app.get('/greeting/:name', function(req, res) {
  var yourName = req.params.name;
  var message = "Nice to meet you, " + yourName;
  res.send(message);
});

app.get('/greeting/:color', function(req, res) {
  var color = req.params.color;
  var message = "Your favorite color is " + color;
  res.send(message);
});

app.get('/salutations', function(req, res) {
  res.send("Thank you, Mr. Node!")
});


app.listen(3000, function() {
  console.log("Listening to Port 3000")
})
