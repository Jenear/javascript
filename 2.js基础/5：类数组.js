/**
 * 类数组属性
 * 1: 有length属性，其他属性的索引为非负整数，对象中的索引会被当做字符串出来
 * 2：不具有数组所具有的方法
 * 类数组就是普通对象，但是他有长度属性
 * 常见类数组：function的中的arguments（但是目前在箭头函数中已经废弃）
 *              Dom对象获取：document.querySelectorAll()
 *              jquery对象：$("div") 
 */ 

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
console.log(Array.prototype.slice.call(arrayLike))
console.log(Array.from(arrayLike))
/**
 * 类数组转为数组的方法
 * 1：Array.prototype.toString.call(类数组)
 * 2：运用es6的扩展运算符 [...类数组],放到函数里去执行
 * 3：es的新增方法Array.from(类数组)
 * 4：箭头函数,和2方法原理一样
 */

 function add(a,b,c){
     console.log(arguments)
     console.log(Array.prototype.slice.call(arguments))
     console.log('...',[...arguments])
     console.log(Array.from(arguments))

     return a+b+c
 }
 add(1,2,3)
 //4：箭头函数
 const add2 = (...rest)=>{
    console.log(rest)
 }
 add2(1,2,3)


