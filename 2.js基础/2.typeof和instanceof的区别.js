/**
 * 1.typeof和instanceof的区别
 * typeof在判断内置类型的时候，不能判断出null，其余的类型都可以进行判断
 * instanceof的实现原理：A instanceof B 主要是看B.prototype是不是在A的原型链上,所以不太适合判断基本类型，
 * 
 * 
 */

//  instanceof 代码实现原理
function instance_of(A,B){
    const b=B.prototype;
    let a = A.__proto__
    while(true){
        if(a===null){
            return false
        }else if(a===b){
            return true
        }
        a=a.__proto__//继续往上一层原型链上查找
    }
}
