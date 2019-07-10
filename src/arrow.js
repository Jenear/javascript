// const arr = [1, 2, 3, 4, 5]
// const newArr = arr.map(item => item * 2)
// console.log('newArr', newArr)
// const obj = { 0: 'Tom', 1: 12, length: 3 }
// // Array.from 将类数组转为数组
// const objArr = Array.from(obj);
// console.log('objArr', objArr)


const arrObj = [
  { id: 1, name: 'aaa' },
  { id: 2, name: 'bbb' },
  { id: 3, name: 'ccc' },
  { id: 4, name: 'ddd' },
  { id: 5, name: 'eee' },
  { id: 6, name: 'fff' },
]

const a = arrObj.map(item => item.name);
console.log('a', a)






const arr = ['aaa', 'ccc', 'ddd', 'fff']
// const selectObj = (arr, arrObj) => {
const result = arrObj.filter(item => {
  console.log(arr.indexOf(item.name))
  return arr.indexOf(item.name) !== -1
})
// }
console.log(result);
const selectArr = (arr, arrObj) => {
  const result = arrObj.filter(item => arr.indexOf(item.name) !== -1)
  return result
}
const newArr = selectArr(arr, arrObj);
console.log('newArr', newArr)