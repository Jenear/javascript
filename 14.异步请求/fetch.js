/**
 * fetch 用法：目前知道两种
 * fetch 是基于promise设计的，支持 async/await； 更加底层； 脱离了XHR，是ES规范里新的实现方式；fetch 默认不携带cookie
 * fetch 优点：避免了ajax的回调地狱问题，而且不需要去封装
 * ajax  需要大量的封装之后采取使用：比如jQuery和axios（运用promise）都是去封装了ajax请求，使用起来才比较方便
 * 1：用whatwg-fetch
 * 2：用isomorphic-fetch
 *
 * 兼容性的一些东西：
 * 首先判断浏览器是否原生支持fetch，否则结合Promise使用XMLHttpRequest的方式来实现；这正是whatwg-fetch的实现思路
 * 而同构应用中使用的isomorphic-fetch，其客户端fetch的实现是直接require whatwg-fetch来实现的。
 *
 */
// 1：用whatwg-fetch
//安装：npm install whatwg-fetch --save
// 使用：
import 'whatwg-fetch';
fetch(url, options).then(
  (res) => {
    console.log(res);
  },
  function (err) {
    console.log(err);
  }
);


// 2：用isomorphic-fetch
// 安装：npm install isomorphic-fetch --save

// 使用：
import fetch from 'isomorphic-fetch';

fetch(url, {
  method: methodData,
  mode: 'cors',
  headers: headersData,
  body: bodyData,
})
  .then((response) => response.json())
  .then((myData) => {
    //返回的就是常规的json数据，可以进行常规操作了
    console.log(myData);
  })
  .catch(function (e) {
    console.log('Oops, error');
  });
/**
 * fetch:
 *　　　符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
 *　　　更加底层，提供的API丰富（request, response）
 *　　　脱离了XHR，是ES规范里新的实现方式
 *　　　1）fetchtch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理，就是在转为json之前做一次封装，判断status的值，来判断返回response 或者 throw.error（resolve或者reject）
 *　　　2）fetch默认不会带cookie，需要添加配置项
 *　　　3）fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了量的浪费
 *　　　4）fetch没有办法原生监测请求的进度，而XHR可以
 */

// cookie传递：必须在header参数里面加上credentials: 'include'，才会如xhr一样将当前cookies带到请求中去
// redentials:默认为omit,忽略的意思，也就是不带cookie还有两个参数，same-origin，意思就是同源请求带cookie；include,表示无论跨域还是同源请求都会带cookie
// - omit: 默认值，忽略cookie的发送
// - same-origin: 表示cookie只能同域发送，不能跨域发送
// - include: cookie既可以同域发送，也可以跨域发送
// 若要fetch请求携带cookie信息，只需设置一下credentials选项即可，例如fetch(url, {credentials: 'include'});
// fetch默认对服务端通过Set-Cookie头设置的cookie也会忽略，若想选择接受来自服务端的cookie信息，也必须要配置credentials选项；

// fetchtch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理

fetch(url, {
  method: methodData,
  mode: 'cors',
  headers: headersData,
  body: bodyData,
})
  .then((response) => checkStatus(response)) //fetch不会自己判断错误的status，自己写一个方法去封装
  .then((response) => response.json())
  .then((myData) => {
    //返回的就是常规的json数据，可以进行常规操作了
    console.log(myData);
  })
  .catch(function (e) {
    console.log('Oops, error');
  });

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

// fetch跨域问题
// 既然是ajax库，就不可避免与跨域扯上关系；XHR2是支持跨域请求的，只不过要满足浏览器端支持CORS，服务器通过Access-Control-Allow-Origin来允许指定的源进行跨域，仅此一种方式。

// 与XHR2一样，fetch也是支持跨域请求的，只不过其跨域请求做法与XHR2一样，需要客户端与服务端支持；另外，fetch还支持一种跨域，不需要服务器支持的形式，具体可以通过其mode的配置项来说明。

// fetch的mode配置项有3个值，如下：

// same-origin：该模式是不允许跨域的，它需要遵守同源策略，否则浏览器会返回一个error告知不能跨域；其对应的response type为basic。

// cors: 该模式支持跨域请求，顾名思义它是以CORS的形式跨域；当然该模式也可以同域请求不需要后端额外的CORS支持；其对应的response type为cors。

// no-cors: 该模式用于跨域请求但是服务器不带CORS响应头，也就是服务端不支持CORS；这也是fetch的特殊跨域请求方式；其对应的response type为opaque。

// 针对跨域请求，cors模式是常见跨域请求实现，但是fetch自带的no-cors跨域请求模式则较为陌生，该模式有一个比较明显的特点：

// 该模式允许浏览器发送本次跨域请求，但是不能访问响应返回的内容，这也是其response type为opaque透明的原因。


