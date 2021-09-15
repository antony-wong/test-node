const https = require('https');
const http = require('http');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world 443\n");
}).listen(443);

http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("hello world 80\n");
}).listen(80);


