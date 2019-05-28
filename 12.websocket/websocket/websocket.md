# websocket

## 运用 ws 启后端 server 服务

```
ws 是nodejs的一个websocket库
安装ws：npm install ws -S
or:  npm install ws
```

## 创建 server 服务

```
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 8800 });
```

## sever 常用方法：

```
  //表明websocket已经连接成功
wss.on('connection', function(ws) {
  //server端接收到client端发送来的数据:message
 ws.on('message', function(message){
   console.log(message)
 });
//server端已经关闭
  ws.on('close', function(message) {
    console.log('close  websocket');
  });
  // 向client端发送数据的方法
   ws.send(data)
}

```

## client 端如何使用：

```
//创建连接，到ws://localhost:8800，在new这里就直接调用了websocket和server端的连接
const ws = new WebSocket('ws://localhost:8800');
// 表明连接已经打开
ws.onopen = function(e) {
  console.log('websocket 已经连接');
};
//接收server端发送来的数据后会触发
ws.onmessage = function(e) {
  console.log('websocket 发送数据过来,e', e);
};
//server端关闭时触发
ws.onclose = function(event) {
  console.log('websocket 已经关闭', event);
};
//server端报错时触发
ws.onerror = function(event) {
  console.log('error', event);
};
//向server端发送数据，主要把对象转为字符串，WebSocket只支持文本和二进制数据
ws.send(JSON.stringify(data))//需要将对象转成字符串。WebSocket只支持文本和二进制数据
```

## websocket 的握手是通过 http 协议 实现的

```
WebSocket 是独立的、创建在 TCP 上的协议。
Websocket 通过HTTP/1.1 协议的101状态码进行握手。不过和普通的http协议会有所不同，他的头部会携带Upgrade: WebSocket，Connection: Upgrade等信息，
为了创建Websocket连接，需要通过浏览器发出请求，之后服务器进行回应，这个过程通常称为“握手”（handshaking）
websocket一次握手成功就会一直连接，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。
```
