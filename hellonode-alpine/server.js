var http = require('http');
var handle_request = function(request, response){
console.log('Received request for URL: ' + request.url);
response.writeHead(200);
response.end('Hello World with Alpine and Nodejs!');
};
var www = http.createServer(handle_request);
www.listen(8080);
