/**
 * Async/await
 * 有一种特殊的语法可以更舒适地与promise协同工作，它叫做async/await，它是非常的容易理解和使用。
 * async-await是promise和generator的语法糖
 * 简单来说：async-await 是建立在 promise机制之上的，并不能取代其地位。
 * 1:async关键字放在函数的前面
 * 1.1：函数前面放置async一词意味这一个简单的事情：这个函数返回的总是一个promise，
 * 如果代码中return 的非promise语句，js会自动返回这个value值包装成promise的resolved值
 */
async function foo() {
    return 1;
}
foo() //返回的是一个promise对象，resolved为1 的promise对象
foo().then(r => console.log(r)) //返回的是：1

/**
 * 2：await
 * 2.1：await关键字只能在async函数中使用，这一点一定要切记
 * 2.2：关键词await可以让JavaScript进行等待，直到一个promise执行并返回它的结果，JavaScript才会继续往下执行。
 * 
 */
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done')
    }, 2000);
})
async function fn() {
    console.log('aa')
    let result = await promise;
    console.log('bb')
    return result;
}
fn().then(r => console.log(r)); //aa   (等待2s...)  bb done
//aa 等待2s后打印bb，接着打印done，其实console.log('bb')的执行是等到 let result = await promise;成功之后才会执行的，
//虽然打印在前面是因为，此时没有打印，放到了then里去打印了，
//也就是上面的2.2关键词await可以让JavaScript进行等待，直到一个promise执行并返回它的结果，JavaScript才会继续往下执行。这句话的解释


/**
 * 3:还可以使用await方法的有：
 * 3.1：thenable对象（thenable对象就是对象方法中或者原型中有then方法可以进行调用的对象）
 */

class Thenable {
    constructor(num) {
        this.num = num
    }
    then(resolve, reject) {
        alert(resolve) // function() {native code}
            // 1000ms后将this.num*2作为resolve值
        setTimeout(() => { resolve(this.num * 2), 1000 })
    }
}
async function f() {
    // 等待1s，result变为2
    let result = await new Thenable(1)
    alert(result)
}
f() //先alert方法，后alert出2

/**
 * 4：async方法也可以用在一个class方法中
 */

class Waiter {
    async wait() {
        return await Promise.resolve(1)
    }
}
new Waiter().wait().then(r => console.log(r)) //1

/**
 * 5:async 和 await 方法的错误处理：
 * 5.1：如果一个promise正常resolve，那么await返回这个结果，但是在reject的情况下会抛出一个错误，就好像在那一行有一个throw语句一样。
 */

async function f() {
    await Promise.reject(new Error('whoops!'))
}
// 和下面一样
async function f() {
    throw new Error('Whoops!')
}

/**
 * 5.2：在真实的使用场景中，promise在reject抛出错误之前可能需要一段时间，所以await将会等待，然后才抛出一个错误。
 * 我们可以使用try-catch语句捕获错误，就像在正常抛出中处理异常一样：
 */

async function f() {
    try {
        console.log('aaa');
        let response = await fetch('http://no-such-url');
        console.log('bbb');

    } catch (err) {
        console.log(err) // TypeError: failed to fetch
    }
}
f(); //aaa  TypeError: failed to fetch,其中bbb没有打印出来，因为报错了就不在往下走了
/**
 * 5.3：报错处理也可以用.catch方法去捕获
 */
async function f() {
    let response = await fetch('http://no-such-url')
}
f().catch(r => console.log(r)) //f()变成了一个rejected的promise

/**
 * 6:async await 应用
 * 6.1:有了async/await，我们很少需要写promise.then/catch，但是我们仍然不应该忘记它们是基于promise的
 * 6.2：可以很好的和promise.all ()很好的合作
 */

async function f() {
    let results = await Promise.all([
        fetch(url1),
        fetch(url2),
        ...
    ])
}

/**
 * 7:async  await 之所以很流行，可以代替promise是为什么呢？
 * 7.1：写异步代码就像写同步代码一样了，再也没有回调地域了。
 */
function setTime(param, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param)
        }, timeout);
    })
}
async function test() {
    let first = await setTime('001', 2000);
    console.log('first:', first, )
    let second = await setTime('002' + first, 1000);
    console.log('first:', first, 'second:', second, )
    let third = await setTime('003' + second, 3000);
    console.log('first:', first, 'second:', second, 'third:', third)
        // return { first, second, third }
}
test()

/**
 * 8：用promise仿照上面的例子写一个链式调用的例子，
 */
let p = setTime('001', 1000);
p.then((data) => {
    console.log('1', data)
    return setTime(data + '002', 1000)
}).then((data) => {
    console.log('2', data)
    return setTime(data + '003', 1000)
}).then(data => {
    console.log('3', data)
})

/**
 * 9. 用promise实现一个ajax
 */
function getJson(url) {
    const promise = new Promise(function(resolve, reject) {
        let handler = function() {

        };
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
                return
            } else {
                if (xhr.status === 200) {
                    resolve(xhr.response)
                } else {
                    reject(new Error(xhr.status))
                }
            }
        };
        xhr.send()
    })
    return promise;
}
getJson('/').then(r => console.log(r)) //成功
getJson('/post.json').then(r => console.log(r)) //报错