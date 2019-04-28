//=== 不进行类型转换，只有类型相等，且值相等才返回true

// 注意！！！！！！！ 此处不能包含symbol类型的判断，symbol和谁都不相等，创建出来的那一刻他就是独一无二的，

// == 在判断的时候会先判断类型是否相同，如果类型相同直接判断值，如果类型不相同，要先进行类型转换，转换之后再进行值的判断

// 记住几个特例
console.log(null==undefined) // true
console.log([]==![]) //true

// 记住几种常用转换
// string 和number ==>将string转为number之后再比较
