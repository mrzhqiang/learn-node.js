// why const instead of let?
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    // so, what is the 'end' function?
    response.end('Hello World\n');
});

server.listen(port, hostname, () => {
    // must use `, not use '
    console.log(`Server running at http://${hostname}:${port}/`);
});
