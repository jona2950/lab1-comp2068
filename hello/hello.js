var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Hello World");
	response.end();
}).listen(8088);
console.log("Hello World");