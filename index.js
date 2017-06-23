// index.js
// Date: 22 June 2017
var http = require('http');
var bodyParser = require('body-parser');
// console.log(http);

// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type':'text/plain'});
//   response.end("Hello World!"); //fires when response is complete
// }).listen(3000, function() {
//   console.log("App is listening on port 3000")
// });

var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/color/:color', function(req, res) {
  var yourColor = req.params.color;
  var message = "Your favorite color is " + yourColor;
  res.send(message);
});

app.get('/salutations', function(req, res) {
  res.send("Thank you, Mr. Node!")
});

app.post('/products', function(req, res) {
  // console.log(req.body.testOne);
  var name = req.body.name;
  var color = req.body.color;
  var price = req.body.price;

  var product = {
    name: name,
    color: color,
    price: price
  };

  res.json(product);
  console.log(req.body);
});

app.post('/movies', function(req, res) {

  var movie = {
    title: req.body.title,
    rating: req.body.rating,
    recommend: req.body.recommend
  };

  res.json(movie);
  console.log(movie);
}) ;

app.listen(3000, function() {
  console.log("Listening to Port 3000")
})
