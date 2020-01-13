var http = require('http');

var RC_HOST = '192.168.40.238';
var RC_PORT = 9009;

http.createServer(function (req, res) {
    console.log('Received message: ' + req.url);
    res.writeHead(200);
    res.write("Server is working");
    res.end();
}).listen(RC_PORT, RC_HOST);
console.log('Server running at http://'+RC_HOST+':'+RC_PORT+'/');