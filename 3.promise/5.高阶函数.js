//高阶函数：一个函数返回一个函数
function isType(type) {
    return function(content) {
        let t = Object.prototype.toString.call(content).replace(/\[object\s|\]/g, '');
        console.log(t)
        return t === type;
    }
}

// let isString = isType('String')
// console.log(isString('aaaa'));
// let isObject = isType('Object')
// console.log(isObject({}))

//实现一个通用的检测类型的方法
let util = {}
const arr = ['String', 'Object', 'Array', 'Function', 'Undefined', 'Null', 'Number', 'Boolean']
arr.forEach((item) => {
    util['is' + item] = isType(item)
})
console.log(util)
console.log(util.isString('aaa'))


// console.log(Object.prototype.toString.call(true))

//2：函数可以作为参数传递，典型的callback
//也有： loadash


function after(times, callback) {
    return function() {
        if (--times === 0) {
            callback()
        }
    }
}
let eat = after(3, function() {
    console.log('eat over')
})
eat();
eat();
eat();