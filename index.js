// index.js
// Date: 22 June 2017
var http = require('http');
// console.log(http);

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.end("Hello World!"); //fires when response is complete
}).listen(3000, function() {
  console.log("App is listening on port 3000")
});
