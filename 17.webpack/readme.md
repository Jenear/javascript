# webpack
## 1: webpack 的使用安装：
  ```
  npm install --save-dev webpack
npm install --save-dev webpack@<version>
```

如果你使用 webpack 4+ 版本，你还需要安装 CLI。

npm install --save-dev webpack-cli

## 2: webpack 配置
创建webpack.config.js
在终端执行webpack命令，默认是执行webpack.config.js 文件

## 3： loader使用
loader的使用，主要放到一个module里的rules里，rules对应的是一个数组，里面可以配置各种loader
如：解析js，解析css ， 解析less， 解析sass ， 解析图片，等。。。

##4:运用url-loader导致图片无法正常拿到
原因：主要是因为url-loader让图片进行了重命名，放到了.js所在的同级目录，
解答1：所以默认是引用的同级目录，把html也和图片放同一级就可以拿到了；
解答2： 在output中加入publicPath指定html从指定的文件夹下去获取数据，但是这个方法不太好，容易限制html的引用路径，一般不建议使用，最好使用解答1中的方法

## 5: 安装webpack-dev-server报错为无法识别
npm i webpack-dev-server -D 之后需要全局安装下webpack-dev-server
npm i webpack-dev-server -g

## 6:webpack-dev-server 是将打包后的文件放到自己的服务器中还是dist中
解答：webpack-dev-server 会解析webpack.config.js 然后把打包后的文件生成，放到自己的内存中，直接可以去引用，不用考虑路径问题
和打包后的dist中的文件没有任何关系，因为不会从这个文件中去读取文件，因为所有的操作都是在webpack-dev-server 的内存中调用的

## 7：output中使用了publicPath会影响到webpack-dev-server中去使用打包好的文件吗？
解答：会
因为这样的会默认将打包的代码放到了publicPath设置的文件夹下，所有在引用的时候就需要考虑路径的问题，而不是直接用了，这个需要清楚报错的原因是什么，所以一般不经常使用publicPath，

## 8：dvServer中设置contentBase的作用
解答：webpack-dev-server 默认服务于根目录下的index.html,关键点："根目录"，"index.html",如果把index.html放到根目录下，这个配置就不需要了