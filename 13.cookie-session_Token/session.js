const http = require('http');
const url = require('url');
const querystring = require('querystring');
const SESSION_KEY = 'SESSION_KEY';
let sessions = {};
http
  .createServer(function (req, res) {
    const urlObj = url.parse(req.url, true);
    const { pathname } = urlObj;
    if (pathname === '/') {
      let sessionID = req.headers.cookie;
      const sessionId = querystring.parse(sessionID).SESSION_KEY;
      if (sessionId) {
        const sessionObj = sessions[sessionId];
        console.log('sessionObj', sessionObj)
        const { balance } = sessionObj;
        const newObj = { balance: balance - 20 };
        sessions[sessionId] = newObj;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('欢迎您再次光临,您的余额为:' + newObj.balance);
      } else {
        const sid = Date.now() + "" + Math.random();
        const sessionObj = { balance: 1000 };
        sessions[sid] = sessionObj;
        res.setHeader('Set-Cookie', SESSION_KEY + '=' + sid + '; max-age=20');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('欢迎新朋友,送你一张会员卡,余额为:' + sessionObj.balance);
      }
    }
  })
  .listen(3003);
