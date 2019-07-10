var arr = [1, 2, 3, 4, 5, 6, 7];
(function fn() {
  var result = arr.map(function (item) {
    return item * item
  })
  console.log('result', result)
})()
