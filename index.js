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
            response.setHeader("Content-Type", "image/png");
            fs.readFile('404.png', function read(err, files) {
            if (err) {
                throw err;
            } else {
                response.write(files);
                response.end();
            }
        });
    };
});

server.listen(8080);