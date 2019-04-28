//1：普通的异步请求
function callback() {
    console.log('Done!')
}
console.log('start');
setTimeout(callback, 1000);
console.log('end');
//打印结果：start end   Done！（等待了1s之后执行）可见，异步操作会在将来的某个时间点触发一个函数调用。

// 2，Ajax是最典型发异步操作
let xmlHttpRequest; //定义一个变量,用于存放XMLHttpRequest对象

function createXMLHttpRequest() { //创建XMLHttpRequest对象的方法
    if (window.ActiveXObject) //判断是否是IE浏览器
    {
        console.log('a')
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP"); //创建IE浏览器中的XMLHttpRequest对象
    } else if (window.XMLHttpRequest) //判断是否是Netscape等其他支持XMLHttpRequest组件的浏览器
    {
        console.log('b')
        xmlHttpRequest = new XMLHttpRequest(); //创建其他浏览器上的XMLHttpRequest对象
    }
}）
createXMLHttpRequest();
console.log('xmlHttpRequest', xmlHttpRequest)
xmlHttpRequest.open('get', url, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //post请求必须设置头部信息
xmlHttpRequest.onreadystatechange = function(req, res) {
    if (xmlHttpRequest.readyState == 4) {
        if (xmlHttpRequest.status == 200) {
            console.log('成功')
        } else {
            console.log('失败')
        }
    }
}
xmlHttpRequest.send() //如果是get请求传一个null，如果是post请求传对应的请求的数据

//这种成功和失败的不利于复用，如果可以写成链式调用就可以很好的去使用
/**
 * 3： promise
 * Promise最大的好处是在异步执行的流程中， 把执行代码和处理结果的代码清晰地分离了：
 */

let promise = new Promise(function(resolve, reject) {
    console.log('Promise'); //先打印，因为promise是创建就立即执行的
    resolve('resolved!')
})
promise.then(function(value) {
    console.log(value)
}).then(function(value) {
    console.log(value)
});
console.log('Hi')

//Promise  Hi  resolved！ undefined

/**
 * promise是创建就立即执行的
 * promise 的then方法返回的仍一个promise，但是是一个新的 promise，不是原来的
 */

/**
 * 4：promise 可以支持多个并发的请求，获取并发请求中的 数据
 */
/**
 * 5：promise可以解决异步的问题，promise自身是创建就立即执行的。不过promise的then方法是异步的
 */

/**
 * 6：promise有三个状态： resolve成功，reject失败，pending等待状态
 * pending-->resolve
 * peding --> reject,
 * resolve  和reject 不可以相互转换，pending转化之后就不能再转化了
 */