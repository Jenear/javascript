const express = require('express');
const app = express();

const whiteList = ['http://localhost:3000', 'http://localhost:5000']
app.use(function (req, res, next) {

  const origin = req.headers.origin;
  if (whiteList.includes(origin)) {
    console.log('33333333333333')
    //存在于whiteList中的请求都可以允许跨域
    res.setHeader('Access-Control-Allow-Origin', origin);
    //这样设置意思允许所有的跨域
    res.setHeader('Access-Control-Allow-Origin', "*")
  }

  next();
})
app.get('/getData', function (req, res) {
  console.log('req.headers', req.headers)
  res.end('I am 4000 server')
})

app.listen(4000)