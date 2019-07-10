# Babel 是什么？

## babel 是一个JavaScript编译器

babel  是一个工具链，主要用于将ECMAScript 2015+ 版本的代码转化为向后兼容的js语法
以方便能够运行在当前环境和旧版本的浏览器或其他环境中

下面列出Babel能为你做的事情：
- 语法转换
- 通过polyfill方式在目标环境中添加缺失的特性（通过@Babel/polyfill模块）
  <!-- babel默认只转换js语法， -->
- 源码转换（codemods）

# Babel使用指南

Babel工具链是由大量的工具组成的，无论你是“最终用户”还是在集成Babel，这些工具都简化了Babel的使用


## cli 命令行的基本用法
注意：从Babel 7 版本开始，都是以@babel作为冠名，替代了之前的babel
例如：@babel/cli 替代了 babel-cli

### 核心库：
Babel 的核心功能包含在@babel/core模块中，
通过 npm install --save-dev @babel/core 来安装
你可以在js程序中直接require并使用它
```
const babel = require('@babel/core')
babel.transform("code",optionsObject)
```

### LCI 命令行工具
@babel/cli是一个能够冲终端（命令行）使用的工具，下面是其安装命令和基本用法
```
npm install --save-dev @babel/core @babel/cli

./node_modules/.bin/babel src --out-dir lib
你可以利用 npm@5.2.0 及+版本所自带的 npm 包运行器将 ./node_modules/.bin/babel 命令缩短为 npx babel
npx babel src --out-dir lib
```
上面代码的功能是：解析src目录下所有的JavaScript文件，并应用外面所指定的代码转换功能，然后把每个文件输出到lib目录下（参考reactredux项目中的lib文件），
注意：由于我们还没有指定任何代码转换功能，所以输出的代码将与输入的代码相同（不保留原代码格式）

## 插件和预设(preset)
代码转换功能以插件的形式出现，插件是小型的JavaScript程序，用于指导Babel如何对待代码进行转换。也可以自己编写插件，如果你觉得你很牛的话。。。

例如：将es2015+ 语法转为ES5语法，可以用@babel/plugin-transform-arrow-functions（箭头函数） 之类的官方插件：
```
npm install --save-dev @babel/plugin-transform-arrow-functions

./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```
上面代码可以实现，将箭头函数转为普通的函数形式
但是这只转化了箭头函数，其他的ES2015+的特性仍未转换，但是我们不希望一个接一个的添加所需要的插件，这样很麻烦

下面我们可以使用一个preset，即一组预先设定好的插件

```
npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
```
注意：如果执行执行npx babel src --out-dir lib  这样的话代码和原来的是一样的，只是头部加了一个"use strict";，格式稍微有所变化，别的不会进行编译

另外一种方法是进行配置文件，而不是在控制台输入cli和preset配置参数
## 配置

Babel也有配置文件，就好比eslint和prettier有配置文件.eslintrc 和.prettierrc一样

使用方法：
1：babel.config.js

在项目的根目录（package.json 文件所在目录）下创建一个名为 babel.config.js 的文件，并输入如下内容
```
module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}
```

2:.babelrc
```
{
  "presets": [...],
  "plugins": [...]
}
```

3:.babelrc.js
与 .babelrc 的配置相同，但你可以使用 JavaScript 编写。
```
const presets = [ ... ];
const plugins = [ ... ];

module.exports = { presets, plugins };
```
你还可以调用 Node.js 的任何 API，例如基于进程环境进行动态配置：
```
const presets = [ ... ];
const plugins = [ ... ];

if (process.env["ENV"] === "prod") {
  plugins.push(...);
}

module.exports = { presets, plugins };
```