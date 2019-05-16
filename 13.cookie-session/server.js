const http = require('http');
const url = require('url');
const querystring = require('querystring')

http.createServer(function (req, res) {
  const urlObj = url.parse(req.url, true);
  const { pathname } = urlObj;
  if (pathname === '/write') {
    const ts = new Date(Date.now() + 20 * 1000).toGMTString();


    //设置set-cookie 到header里发送到浏览器

    // res.setHeader('Set-Cookie', "name" + Math.random() + "=wenjuan;Expires=" + ts);
    res.setHeader('Set-Cookie', "name=wenjuan; Expires=" + ts);
    //传多个cookie到浏览器
    // res.setHeader('Set-Cookie', ["name=wenjuan", "age=26"]);
    res.end('write')
  } else if (pathname === '/read') {
    //取出cookie
    const cookie = req.headers.cookie;
    //解析取到的cookie
    const cookieObj = querystring.parse(cookie, "; ")
    console.log('cookie', cookieObj)

    res.end(cookie)

  }

}).listen(3030)