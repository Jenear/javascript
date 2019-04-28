/**
 * es5 中没有类的概念，是用构造函数去实现的
 * *如何实现一个类
 * 类的继承：三种属性：公有属性(就是定义到构造函数原型prototype上的方法,也就是实例的__proto__上)，私有属性，静态方法（静态属性）
 * 
 */
function Parent() {
    //构造函数中的this，通过new调用的this只想new出来的实例
    this.name = 'parent';
}
Parent.prototype.eat = function() {
        console.log('eat')
    }
    //new一个实例出来
const parent = new Parent();

//构建一个子类
function Child() {
    this.age = 9
}
let child = new Child();
//现在实现Child去继承Parent