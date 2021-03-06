//数组中改变原数组的方法有哪些：
const arr = [1, 2, 3, 4, 7, 12, 34, 21, 56, 71, 10000];
//1:fill() 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
//2：pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
//3：push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度
//4:reverse() 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组.
//5:shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。改变原数组

//6：sort() 方法用原地算法对数组的元素进行排序，并返回数组。排序算法现在是稳定的。默认排序顺序是根据字符串Unicode码点。原数组被改变
//由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
//对数字进行排序的常用方法:
console.log("1", arr.sort()); //[ 1, 10000, 12, 2, 21, 3, 34, 4, 56, 7, 71 ]
console.log("2", arr.sort((a, b) => a - b)); //[ 1, 2, 3, 4, 7, 12, 21, 34, 56, 71, 10000 ]
console.log("3", arr.sort((a, b) => b - a)); //[ 10000, 71, 56, 34, 21, 12, 7, 4, 3, 2, 1 ]
console.log("arr", arr); //[10000, 71, 56, 34, 21, 12, 7, 4, 3, 2, 1]

//7： splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组, 并以数组形式返回被修改的内容。 此方法会改变原数组。

//8：unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。改变原数组

// -----------------------------------------------------------------------------------------------------------

// 数组中不改变原数组的方法有哪些
/**
 * 1: concat(), 合并两个或多个数组，不改变数组，而返回一个新的数组
 */
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "d", "f"];
const arr3 = ["h", "i", "g"];
const newArr = arr1.concat(arr2, arr3);
console.log("newArr", newArr, "arr1", arr1);

//2：filter(),方法创建一个新的数组，返回值是符合filter里面方法的item对象

//3：find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

//4：forEach() 方法对数组的每个元素执行一次提供的函数，不会改变原数组，也没有返回值

// 5：map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。原数组不改变

//6：reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。不会返回原数组
// arr.reduce(callback[, initialValue])
// initialValue可选
// 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。

//7：slice() 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变。

/**
 * 数组中取最大值和最小值
 */

//  es5
console.log("max", Math.max.apply(null, arr));
console.log("min", Math.min.apply(null, arr));

// es6
console.log(Math.max(...arr));
console.log(Math.min(...arr));
Math.max(...arr);
Math.min(...arr);

const arr4 = [1, 2, 3, 4, 5, 6];

// 重点：map filter reduce
arr4.map(item => {
  console.log(item * 2);
});

const a = arr4.filter(item => {
  return item > 4;
});
console.log("a", a);

const b = arr4.reduce((accu, curr) => {
  // accu,如果reduce传有第二个参数，他就指第二个参数，实例中的7，如果第二个参数没传，那么他就指向arr4的第一个参数，下一轮指向返回结果
  // curr指指向的当前的值，没有第二个参数的时候指向arr4的第二个值，如果有的话指向第一个值，
  console.log(accu, curr);
  return accu + curr;
}, 7);
console.log("b:", b);

const iphone = [
  { name: "iphone4", price: 3000 },
  { name: "iphone5", price: 3500 },
  { name: "iphone6", price: 3900 },
  { name: "iphone7", price: 4500 },
  { name: "iphone8", price: 5000 }
];

const p = iphone.reduce((accu, curr) => {
  console.log("aaaa", accu, curr);
  return accu + curr.price;
}, 0);
console.log("p:", p);
