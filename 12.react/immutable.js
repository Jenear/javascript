/**
 * immutable的使用方法：
 * immutable data 一旦创建就不会被更改，任何的修改和添加都会返回一个新的immutable对象；而且老的对象不会改变
 * 常用api
 *
 */

//Map()  原生object转Map对象 (只会转换第一层，注意和fromJS区别)
immutable.Map({ name: 'danny', age: 18 })

//List()  原生array转List对象 (只会转换第一层，注意和fromJS区别)
immutable.List([1, 2, 3, 4, 5])

//fromJS()   原生js转immutable对象  (深度转换，会将内部嵌套的对象和数组全部转成immutable)
immutable.fromJS([1, 2, 3, 4, 5])    //将原生array  --> List
immutable.fromJS({ name: 'danny', age: 18 })   //将原生object  --> Map

//toJS()  immutable对象转原生js  (深度转换，会将内部嵌套的Map和List全部转换成原生js)
immutableData.toJS();

//查看List或者map大小  
// immutableData.size  或者 immutableData.count()

// is()   判断两个immutable对象是否相等
immutable.is(imA, imB);

//merge()  对象合并
var imA = immutable.fromJS({ a: 1, b: 2 });
var imA = immutable.fromJS({ c: 3 });
var imC = imA.merge(imB);
console.log(imC.toJS())  //{a:1,b:2,c:3}

//增删改查（所有操作都会返回新的值，不会修改原来值）
var immutableData = immutable.fromJS({
  a: 1,
  b: 2,
  c: {
    d: 3
  }
});
var data1 = immutableData.get('a') //  data1 = 1  
var data2 = immutableData.getIn(['c', 'd']) // data2 = 3   getIn用于深层结构访问
var data3 = immutableData.set('a', 2);   // data3中的 a = 2
var data4 = immutableData.setIn(['c', 'd'], 4);   //data4中的 d = 4
var data5 = immutableData.update('a', function (x) { return x + 4 })   //data5中的 a = 5
var data6 = immutableData.updateIn(['c', 'd'], function (x) { return x + 4 })   //data6中的 d = 7
var data7 = immutableData.delete("a")   //data7中的 a 不存在
var data8 = immutableData.deleteIn(['c', 'd'])   //data8中的 d 不存在


// 如果用immutable，还需要使用redux - immutable的 combineReducers 来和并所有的reducer