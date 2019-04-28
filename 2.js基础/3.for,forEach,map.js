//1：for 循环：for(let i=0,len=list.length;i<len;i++){console.log(list[i].name)}

//:2:for..in.. 遍历对象和继承可枚举的属性，而且这种方法不太好是会影响性能，执行很慢，因为每次都要去遍历key值拿出来然后进行操作
// 如果不是不定长度的对象尽量使用for(let i=0,len=list.length;i<len;i++){}循环
const list =[{name:'aa'},{name:'aaddd'},{name:'aabb'},{name:'ba'}]
const arr=[1,2,3,4,5,6]
// undefined
for(let i=0,len=list.length;i<len;i++){console.log(list[i].name)}
//aa aaddd aabb ba
for(let key in list){
    console.log(list[key].name)
}

//aa aaddd aabb ba

// 3：for...of循环：具有 iterator 接口，就可以用for...of循环遍历它的成员(属性值)。
//for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象、Generator 对象，以及字符串。
//for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。对于普通的对象，
//for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。可以中断循环。


//4:forEach
//遍历数组，进行操作，没有返回值(可以认为返回值为undefined)，而且不会修改原数组,如果修改值，需要有变量进行接收
list.forEach((item)=>{
    console.log(item)
});
arr.forEach((item)=>{
    console.log(item*2)
})
console.log('arr',arr)

// 5:map
//遍历数组，返回修改后的值，不会改变原数组
let newArr =arr.map((item)=>{
    return item*2
})
console.log('arr',arr,'newArr',newArr)

/**
 * 优化
 * for循环是最快的执行方法，如果用倒叙循环可以更快
 */
for(let i=list.length;i--;){console.log(list[i].name)}
//这种执行方式在（）中的判断中少了一次判断，之前要判断i是否小于len，然后在判断i<len是否为true，现在这种倒叙的写法，直接判断i--是否为true就可以了，所以运行机制更快