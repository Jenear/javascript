let fs = require('fs');

function read(url) {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(url, 'utf-8', function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })

    })
    return promise
}

//promise.all 方法只有所有的返回都是true的时候才会走到then的成功里，有一个失败就走到err里
// Promise.all([read('1.txt'), read('2.txt')]).then(data => {
//     console.log(data)
// })
// Promise.all([read('1.txt'), read('3.txt')]).then(data => {
//     console.log(data)
// }, err => {
//     console.log(err)
// })


//Promise.race  方法是谁先返回就走谁，成功和err都一样的，返回最先返回的那个
Promise.race([read('1.txt'), read('2.txt')]).then(data => {
    console.log('race', data)
});
Promise.race([read('1.txt'), read('3.txt')]).then(data => {
    console.log('race2222222', data)
}, err => {
    console.log('race err', err)
})

//Promise.resolve直接返回成功的
Promise.resolve('123').then(data => {
    console.log(data)
})

//Promise.reject直接返回成功的
Promise.reject('123').then(null, err => {
    console.log('err', err)
})