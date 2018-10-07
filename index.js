var fs = require('fs');
var http = require('http');

var server = http.createServer();


server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.url === '/') {
        fs.readFile('./index.html', function read(err, files) {
            if (err) {
            	throw err;
            } else {
	           	response.write(files);
	            response.end();	
            }
        });
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    };
});

server.listen(8080);