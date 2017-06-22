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

app.listen(3000, function() {
  console.log("Listening to Port 3000")
})
