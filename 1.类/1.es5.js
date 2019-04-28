/**
 * es5中没有类的概念，创建对象是用构造函数实现的
 * 重点记住的方法：一和二，一种的call和二中的Object.create,这两个是重点
 */
function Parent(){
    this.name = 'Parent'
    // return {}
}

console.log('222222222222222222222',typeof(Parent()))
Parent.prototype.eat=function(){
    console.log('eat');
}
const parent = new Parent();
//一、私有属性继承
function Child(){
    this.age= 9
    // Parent.call(this)//继承私有属性，this在这里和ths.age,是同一个this，被调用的时候指向一致
}
const child = new Child();
// 打印出结果为Parent，此为私有属性继承 Parent.call(this)
console.log('child---',child.name)// Parent
console.log('child',child)// { age: 9, name: 'Parent' }

// 二、只继承公有属性
Child.prototype.play=function(){
    console.log('play')
}
// 警惕！！！！！   Child.prototype=Parent.prototype;//这种方法不能实现继承了，这种方法，child和parent都可以去改原型，导致他俩共用了，是兄弟关系，不是父子关系，而且也不会实现继承

//下面是es5和es6的实现继承，把Child的prototype的__proto__ 指向Parent的prototype，这种方法继承公有属性，也继承私有属性
// Child.prototype.__proto__=Parent.prototype;//es5的实现方法
// Object.setPrototypeOf(Child.prototype,Parent.prototype)//es6的实现方法，和上面一行es5的实现基本上一样的

// Object.create//只继承公有
Child.prototype= Object.create(Parent.prototype)//只继承公有，但是会让Child实例的constructor指向Parent
let c = new Child();
console.log(c.eat())// 能打印
// console.log('play',c.play())//报错
console.log(c.name) // 不能继承
console.log('aaa',c.constructor)//指向了Parent

//实现了只继承公有属性
Child.prototype= Object.create(Parent.prototype,{constructor:{value:Child}})//只继承公有，而且会让Child实例的constructor指向Child
//下面这个写法运用起来好像有问题 ----------------------------------不会解答-----------------------------------
//-----------------没有问题，已经解答----------------：下面这种定义方法会定义到child的__proto__ 上，而继承的Parent的原型的方法会在child.__proto__.__proto__上，所以play和eat都可以访问到
// Child.prototype.play=function(){//这个方法如果写在只继承公有属性的前面，实例将拿不到原型上定义的方法，
//     console.log('play')
// }

let chd = new Child();
console.log('chd---',chd)//Child
console.log('playchd2222222222',chd.eat())

// 三、继承私有和公有属性
Child.prototype= new Parent();//一般不会使用这种方法去继承，可以忽略



// -------------------------------------------------------------------------------------------------------------------
function Parent(){
    this.name='parent';
}
Parent.prototype.eat=function(){console.log('eat')}

function Child(){
    this.age = 9;
}
Child.prototype=Object.create(Parent.prototype,{constructor:{value:Child}});

Child.prototype.play=function(){console.log('play')}
const child= new Child();
// console.log('1111',child.eat(),child.play())
// // console.log(child.play())
const parent= new Parent()
console.log('1111',parent.eat())
console.log(Child.prototype.__proto__ === Parent.prototype)//true
console.log(Child.__proto__ === Parent)//false

