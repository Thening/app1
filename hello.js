const http = require("http");
/*
// simple without routing

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write('Hello, World!\n');

    response.end();
}).listen(1337);
*/
// routing

var routes = {
    '/': function index (request, response) {
        response.writeHead(200);
        response.end('Hello, World!');
    },
    '/foo': function foo (request, response) {
        response.writeHead(200);
        response.end('you are now viewing "foo"');
    }
}

http.createServer(function(request, response) {
    if (request.url in routes) {
        return routes[request.url] (request, response)
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(1337);