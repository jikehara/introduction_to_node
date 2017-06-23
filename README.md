## My first commit!
### This is all notes.

Node.js® is a JavaScript ~~runtime built~~ on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

A **Node Module** is a modular application of code. This allows it to fit into other parts of code, like an assembly line of code with multiple replaceable parts.

**NPM** is Node Package Manager. It's a tool the lets us access the node module ecosystem and add them to our code.

A **package.json** is the master file the keeps track of all the useful node modules for a project.

To add a `package.json` to a project, run the commandc `npm init` and accept all defaults.

---

`git add -A
git commit -m "commit message here"
git push origin master`

---

`example node_module: [Moment.js]
https://momentjs.com`

### Node HTTP SErver
WE used the node module HTTP to build a simple web server which we can run using the localhost. this example would use a browser address of "localhost:3000".

```js
// Date: 22 June 2017
var http = require('http');
// console.log(http);

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.end("Hello World!"); //fires when response is complete
}).listen(3000, function() {
  console.log("App is listening on port 3000")
});
```

### Express Web server
[Express API](http://expressjs.com/)

To add express node module to our application:
`sudo npm install --save express`
To ensure it was added right, check `package.json` for
```js
"dependencies": {
  "express": "^4.15.3"
}```

This also gives us a ton of code we don't need, so we make a `.gitignore` file with `touch .gitignore` and write in it `node_modules/`.

### Nodemon
Nodemon will watch our files autoatically and restart our server so we don't have to do it manually.

How to install: `sudo npm install -g nodemon`.

How to use: `sudo nodemon index.js`


###

In order to use Postman with req and res, you have to change to the "body" tab to put in keys (vars) and their values. 
```js
app.post('/movies', function(req, res) {

  var movie = {
    title: req.body.title,
    rating: req.body.rating,
    recommend: req.body.recommend
  };
```
