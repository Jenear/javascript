/**
 * 1：js内置类型有几种
 * undefined, null, object,string, number, boolean, symbol (es6新增)
 * 但是如果用typeof判断他们的类型返回时null返回的仍是object，这个是一个历史遗留问题，记得之前在《你不知道的js》中看到说，定义二进制的时候以00开头的typeof判断都是返回object，
 * 而null代表什么都没有，是用0000所代表的，所以返回时object，但是他实际并不是object，应该理解为此处什么都没有比较恰当
 *
 * 2：js的原始类型有哪几种：
 * undefined, null, string, number, boolean, symbol (es6新增)
 *
 * 2：原始类型和复杂数据类型的存储有什么区别
 * 原始数据类型存储在栈内存，存储的是值。
 * 复杂数据类型存储在堆内存，存储的是地址。当我们把对象赋值给另外一个变量的时候，复制的是地址，指向同一块内存空间，当其中一个对象改变时，另一个对象也会变化。
 */
//注意！！！！ symbol不和任何一个symbol相等，他是独一无二的，

const a = 'aaaaaa';
let b = {
  name: 'aaa',
  age: 12,
};
console.log(b, c);
function add() {
  console.log(`a`);
}
