const http = require('http');
const url = require('url');
const querystring = require('querystring');

http
  .createServer(function(req, res) {
    const urlObj = url.parse(req.url, true);
    const { pathname } = urlObj;
    if (pathname === '/') {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Content-type');
      res.end('write');
    }
  })
  .listen(8800);
