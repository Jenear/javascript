// 如何判断一个数组是不是数组，方法有哪些

const arr=[1,2,3]

// 1：Array.isArray()判断，把要判断的数组传入括号中，查看返回结果，返回true，则是数组
// 写法：Array.isArray(arr)
console.log(Array.isArray(arr))

// 2：要判断的数组 instanceof Array 返回true，则是数组
// 写法：arr instanceof Array
console.log(arr instanceof Array)

// 3：Object.prototype.toString.call() 把要判断的数组传入括号中，查看返回结果，返回[object Array]，则是数组
//写法：Object.prototype.toString.call(arr)
console.log(Object.prototype.toString.call(arr))

//4:慎用！！！！！运用原型的方法去判断，arr.consturctor ===Array,这种判断不准确，
// 因为我可以让arr.consturctor =Object，这个时候在用那种方法就失效了
