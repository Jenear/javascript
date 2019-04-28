/**
 * es6种定义了类的概念 class
 * 注意点：
 * 1：类只能用new 来调用
 * 2：用extends来实现继承:可以继承公有私有和静态方法
 * 3:父类的构造函数中返回了一个引用类型，会把这个引用类型作为子类的this
 */
class Parent{
    constructor(){
        this.name='Parent';
        // return {a:12}//父类的构造函数中返回了一个引用类型，会把这个引用类型作为子类的this
    }
    static b(){
        return 2
    }
    eat(){
        console.log('eat')
    }
}
const parent = new Parent();
// console.log(parent.eat())

//如果让Child继承Parent，实现如下，
// 用extends方法要求继承父亲的私有和公有
class Child extends Parent{
    constructor(){
        super()//等价于：Parent.call(this)
        this.age=9
    }
    //static 定义的是静态方法，他是属于类上的方法
    static a(){
        return 1
    }
    // constructor 下面定义的就是原型上的属性
    play(){
        console.log('play')
    }
}
// class Child{
//     constructor(){
//         //constructor 里面定义的是私有属性
//         this.age=9
//     }
//     static 定义的是静态方法，他是属于类上的方法
//     static a(){
//         return 1
//     }
//     // constructor 下面定义的就是原型上的属性
//     play(){
//         console.log('play')
//     }
// }
const child = new Child();
// console.log(child.eat())//eat
console.log(child.name)//Parent
console.log(Child.b())//2，注意这里用的Child，是用类去取的父类上的静态方法
console.log('child',child)// { name: 'Parent', age: 9 }

// const p =Parent();//Class constructor Parent cannot be invoked without 'new'
console.log('----',Child.__proto__ === Parent)//true

