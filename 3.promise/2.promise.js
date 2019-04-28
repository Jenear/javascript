/**
 * 1：promise 是一种异步流程的控制手段，
 * 解决之前的回调地狱问题
 * 2：promise可以解决异步的问题，promise自身是创建就立即执行的。不过promise的then方法是异步的
 * 3：可以支持多个并发的请求，获取并发请求中的 数据
 * 4：promise有三个状态： resolve成功，reject失败，pending等待状态
 * pending-->resolve
 * peding --> reject,
 * resolve  和reject 不可以相互转换，pending转化之后就不能再转化了
 * resolve he reject 方法即使执行了多个，也只会执行第一个，后面的不会执行
 * 5：每一个promise的实例上都一个then方法，then方法中有两个参数，一个参数是成功的函数，一个是失败的函数
 *  promise中如果发生了错误，直接走到了then的失败方法里
 * 6：promise 实现链式调用返回的并不是this，而是一个新的promise
 */
/**
 * promise的好处：
 * 1：promise可以实现不再传递回调函数了，例如2s后输出结果，可以再promise里直接写要给setTimeout 方法
 */

/**
 * 如果返回的是一个普通的值就会走到then的成功回调里
 * 如果有错误就会产生一个失败的回调，
 * 即使是走到了失败了回调了，接着也可以走到下一个then成功里，返回值是undefined
 * 如果没有返回值默认就是return undefined
 * 参考例子：3.readFile.js
 */

/**
 * catch
 * catch 接受promise中的错误，
 * 不过catch之后还可以运用then方法，和then的err中是一样的
 * 参考例子：3.readFile.js
 */

//创建一个promise
//promise 里面只有一个参数，叫excutor执行器，默认new的时候就直接调用了
let promise = new Promise((resolve, reject) => {
    console.log(1);
})
console.log(2)
    // 执行返回结果：1 2，
let promise = new Promise((resolve, reject) => {
    // resolve('resolved!') //走到了then的成功函数里
    // reject('rejected!') // 走到了then方法的失败函数里
    // throw new Error()// 直接走到then方法的失败里，不会走成功的方法中
    setTimeout(() => { //2s后输出成功的方法，不用再传回调函数
        resolve('resolve')
    }, 2000);
})
promise.then((value) => { //value 成功的原因
    console.log('value:', value)
}, (err) => { //err 失败的原因
    console.log('err:', err)
})