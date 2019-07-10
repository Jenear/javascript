"use strict";

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item * 2);
console.log('newArr', newArr);
const obj = {
  0: 'Tom',
  1: 12,
  length: 3 // Array.from 将类数组转为数组

};
const objArr = Array.from(obj);
console.log('objArr', objArr);