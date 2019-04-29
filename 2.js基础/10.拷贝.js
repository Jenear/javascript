//深拷贝和浅拷贝
/**
 * 浅拷贝：只复制第一层对象，但是当对象的属性是引用类型是，实质复制的是其引用，当引用值被改变的时候拷贝的值也跟着改变
 * 深拷贝：复制的是变量值，对于非基本类型的量，则进行递归的方法至基本类型变量后再复制，而且深拷贝的对象与原来的对象是完全隔离的，互不影响
 */
// 深拷贝
function deepClone(obj) {
  if (obj == null) {
    return null;
  } else if (typeof obj !== "object") {
    return obj;
  }
  let t = new obj.constructor(); //不懂
  for (let key in obj) {
    t[key] = deepClone(obj.key); //不懂
  }
  return t;
}
function add() {}
