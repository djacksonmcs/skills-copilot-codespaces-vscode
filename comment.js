//Create web server
//Create a web server that listens for requests on port 3000. When a request is received, the server should respond with a status code of 200 and the following text: "Hello, World!".

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
});

server.listen(3000);