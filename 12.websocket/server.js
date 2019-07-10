import React from 'react';

const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ port: 8800 });

wss.on('connection', function (ws) {
  console.log('connection websocket');
  // let requestData = '';
  let initData = '';
  let begin;
  //接收客户端发送的报文事件
  ws.on('message', function (message) {
    console.log('接收到了用户发来的信息message', message);
    const requestData = JSON.parse(message); //根据请求过来的数据来更新。
    const { type, data } = requestData;
    // console.log('data', data);
    // console.log('bbbbbb', begin);
    if (type === 'init') {
      console.log('init');
      initData = data;
      sendData(data);
      clearInterval(begin);
    } else if (type === 'update') {
      console.log('update');
      begin = setInterval(function () {
        console.log('initData', initData);
        sendUpdateData(ws, initData);
      }, 2000);
    } else if (type === 'close') {
      console.log('close');
      clearInterval(begin);
    }
  });
  ws.on('error', function (e) {
    console.log('error  websocket');
  });

  // 注册连接关闭事件
  ws.on('close', function (message) {
    console.log('close  websocket');
  });

  const sendUpdateData = function (ws, requestData) {
    // console.log('requestData', requestData);
    let data = [];
    if (ws.readyState == 1) {
      data = requestData.map((item) => {
        item.price += 1;
        return item;
      });
      sendData(data);
    }
  };
  function sendData(sendObj) {
    if (sendObj.length !== 0) {
      ws.send(JSON.stringify(sendObj)); //需要将对象转成字符串。WebSocket只支持文本和二进制数据
    }
  }
});
