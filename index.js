var express = require("express");
var bodyParser = require("body-parser");
// for homemade modules, you have to use exact path
// our datemaker is in root so we do ./datemaker
var makeDate = require("./dateMaker")
var app = express();

console.log(makeDate(10));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var instagrams = [
  { title: "My Dog", date: makeDate(10), img: "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Shake-shiver-and-tremble-Why-dogs-do-it.jpg?itok=yvOUgQeL" },
  { title: "Also my dog", date: makeDate(8), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04cM7atojGKtFOZTukDBBqvVy13OgO3ZPrib39rtHEE_qGhdh" },
  { title: "Not my dog", date: makeDate(7), img: "http://barkingroyalty.com/wp-content/uploads/2015/12/Beagle-puppy.jpg?x30644" },
]

app.get("/instagrams", function(req, res) {
  res.json({message: "Found data", data: instagrams});
});

app.post("/instagrams", function(req, res) {

  var newGram = {
    title: req.body.title,
    img: req.body.img,
    date: makeDate(0)};

  instagrams.push(newGram);

  res.json({message: "Post success", data: instagrams});
});

// this must be the last bit of code, other stuff won't run after listen.
var server = app.listen(3002, function() {
  console.log("Listening on port 3002",);
});
