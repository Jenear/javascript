
var sum;

function add(item1, item2, sum) {
  if (item1 > item2) {
    add = function (item1, item2, sum) {
      return item1 - item2
    }
  } else {
    add = function (item1, item2, sum) {
      return item2 - item1
    }
  }
  add(item1, item2, sum)

}
add(11, 4, sum);
add(1, 4, sum);

console.log('sum', sum, add, add(1, 4, sum))