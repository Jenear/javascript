/**
 * 历史：
 * javascript 一直没有模块（module）模块，无法将一个大程序拆分成互相依赖的小文件，在用简单的方法拼接起来
 * 这给开发大型的、复杂的项目形成了巨大的障碍
 * 
 * es6之前社区制定了一些模块加载方案，主要有CommonJS和AMD两种，前者用于服务器，后者用于浏览器
 * 但是这两种存在一定的缺点：CommonJS 和 AMD 模块，都只能在运行时确定这些东西。导致完全没办法在编译时做“静态优化”。
 * 
 * es6模块的设计思想是尽量“静态化”：使得编译时就能确定模块之间的依赖关系，而且成为浏览器和服务器通用的模块解决方案。
 * 
 */

 /**
  * es6 module 模块介绍
  * es6 module 不是对象，而是通过export 命令显示制定输出的代码，之后再通过import命令输入
  * eg：
  */
 import {stat, exists, readFile } from 'fs';
//   * 上面的代码实现的是从fs模块加载3个方法，其他的方法不加载，这种加载成为“编译时加载”或者为静态加载

/**
 * es6 和CommonJS的区别和优缺点：
 * es6 加载模块内部的部分方法，没办法引用es6模块本身，因为它不是对象
 * CommonJS整体加载模块本身，然后在运用它身上的属性
 * es6 加载模块是静态加载，可以对js做一些拓展，比如引入宏和类型校验
 * es6优点：
 * - 静态加载
 * - 不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。目前，通过各种工具库，其实已经做到了这一点。
 * - 将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。
 * - 不再需要对象作为命名空间（比如Math对象），未来这些功能可以通过模块提供。
 * 
 * 它们有两个重大差异。
 * - CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
 * - CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
 */

//  注意！！！！尤其需要注意this的限制。ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this。

// 模块功能主要有两个命令构成：export和import，export命令用于规定模块的对外接口，import命令用于输入其他模块的功能
// --------------export 命令的使用------------------------
// 第一种写法，普通运用
// 到处的时候没有使用default的，引用的时候都需要用{}包括

// profile.js          ES6 将其视为一个模块，里面用export命令对外部输出了三个变量。
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
// 下面这种写法和上面等价，不过更倾向于下面的写法
// profile.js           ES6 将其视为一个模块，里面用export命令对外部输出了三个变量。
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};


// 第二种写法： export default
// 运用export default导出的模块，引用的时候可以指定任意的名字，引用的时候不需使用大括号{}，直接写名字即可
// 运用export default导出模块，只能运用一次
// 如果导出的时候既使用了export default又使用了export，那么引用的时候就需要把exportdefault导出的和export导出的用不同的方式去引用
// lodash
export default function (obj) {
    // ···
}
export function each(obj, iterator, context) {
  // ···
}
export { each as forEach };
//  引入的时候 
import _, { each, forEach } from 'lodash';



// --------------import 命令的使用------------------------
// 第一种写法，普通运用
// main.js
import {firstName, lastName, year} from './profile.js';

// 如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
import { lastName as surname } from './profile.js';

// 注意！！！！import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。但如果是一个对象可以进行修改

// import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。
// 如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。
import {myMethod} from 'util';
// 个人见解：这种情况一般会从最近的node_modules里去查找是否有util.js文件，有这个模块就取出来，没有就一层一层的网上找，只到找到项目的根目录下的node_modules里，

// 注意！！！！！import命令具有提升效果，会提升到整个模块的头部，首先执行。下面不会报错，因为import默认提到了foo（）之前
foo();
import { foo } from 'my_module';

// 由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
// 如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。
import { foo } from 'my_module';
import { bar } from 'my_module';
// 等同于
import { foo, bar } from 'my_module';




// 第二种写法：模块的整体加载

// circle.js

export function area(radius) {
    return Math.PI * radius * radius;
  }
  
  export function circumference(radius) {
    return 2 * Math.PI * radius;
  }
  // main.js

import { area, circumference } from './circle';
console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
// 等价位下面的，运用模块的整体加载
import * as circle from './circle';
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

// -------------export 与 import 的复合写法------------------
// 如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。

export { foo, bar } from 'my_module';
// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
// 注意！！！！
// 上面代码中，export和import语句可以结合在一起，写成一行。
// 但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，
// 导致当前模块不能直接使用foo和bar。


// -------------import()---------------
// // import() 方法为了实现动态加载而引入
// import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，
// 也就是说，什么时候运行到这一句，就会加载指定的模块。
// 另外，import()函数与所加载的模块没有静态连接关系，这点也是与import语句不相同。
import()类似于 Node 的require方法，区别主要是前者是异步加载，后者是同步加载。