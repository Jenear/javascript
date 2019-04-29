let fs = require("fs");

// fs.readFile('1.txt', 'utf-8', function(err, data) {
//     if (err) {
//         console.log('err:', err)
//     } else {
//         console.log('data:', data)
//         fs.readFile('2.txt', 'utf-8', function(err, data) {
//             if (err) {
//                 console.log('err:', err)
//             } else {
//                 console.log('data:', data)
//             }
//         })
//     }
// })

function read(url) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(url, "utf-8", function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return promise;
}
//如果返回的是promise，那么会取这个promise的结果，如果成功会走外层的promise的下一个then的成功，将数据传递到成功里
//实现链式调用
// read('1.txt').then(value => {
//     console.log('value1:', value)
//     return read(value)
// }).then(value => {
//     console.log('value2:', value)
// }, (err) => {
//     console.log('err:', err)
// })

/**
 * 如果返回的是一个普通的值就会走到then的成功回调里
 * 如果有错误就会产生一个失败的回调，
 * 即使是走到了失败了回调了，接着也可以走到下一个then成功里，返回值是undefined
 * 如果没有返回值默认就是return undefined
 */
read("1.txt")
  .then(data => {
    return 100;
  })
  .then(data => {
    throw new Error();
  })
  .then(
    data => {
      console.log("data1:", data);
    },
    err => {
      console.log("err:", err);
    }
  )
  .then(data => {
    console.log("data22222:", data);
  });

/**
 * catch
 * catch 接受promise中的错误，
 * 不过catch之后还可以运用then方法，和then的err中是一样的
 */

read("1.txt")
  .then(data => {})
  .then(data => {
    throw new Error();
  })
  .catch(err => {
    console.log("err----:", err);
  })
  .then(data => {
    console.log("catch-then", data);
  });
