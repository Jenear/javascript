// 1:let 、const 不会出现变量提升，var会出现变量提升
//2：let和const是js中块级作用域
// 3：let和const都不允许重复声明
// 4：let和const在定义语句之前会形成暂时性死区
// 暂时性死区：就是说js会检测到变量已经运用let和const定义了变量，但是必须要执行到定义那行才可以拿到值，如果在定义行之前去运用他，就会报错，这个在执行到定义之前的时间段成为暂时性死区
//5：const 一般定义为常量，定义之后不可改变（如果生命的是要给对象，那么不可改变的是地址）

//自从有个let和const 之后typeof的执行不在是万能的，在暂时性死区调用typeof 方法会导致报错，之前无论和何处调用typeof都不会报错，如果不存在就返回undefined；