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