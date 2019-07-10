const abc = 'dsdsdsds';
function fn(a) {
  function foo(b) {
    return a + b;
  }
  return foo
}
console.log(fn(10)(30)) 