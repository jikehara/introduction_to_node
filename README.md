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
