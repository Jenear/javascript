/**
 * 实现类的调用检测
 * 这里只是定义了new的检测，应该还有属性定义的实现，待续。。。。。
 */

 function  _classCallCheck(instance,constructor){
if(!(instance instanceof constructor)){
throw new Error("Class constructor Parent cannot be invoked without 'new'")
}
 }

 let Parent = function (){
    function P(){
        // console.log('aaa')
        _classCallCheck(this,P)
        this.name='Parent'
    }
    return P;
 }()

//  Parent()//此时相当于直接执行P(); 会打印aaa
Parent()// 如果写了_classCallCheck检测方法，会报错"Class constructor Parent cannot be invoked without 'new'"
