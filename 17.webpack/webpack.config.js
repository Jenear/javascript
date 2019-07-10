const path = require('path');// node 内置的
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//注意引用方式，清楚之前打包的代码

module.exports = {
  entry: './src/js/index.js',//入口文件
  output: {                 //输出的配置
    filename: 'bundle.js',  //输出的文件名
    // publicPath: 'js/',      //这个方法不好，给html提供资源的时候带有请执行，不建议使用，最好把html文件和他们移动到同一个文件夹下
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,//正则表达式，意思是匹配以.css结尾的文件
        use: ['style-loader', 'css-loader']//用来解析css文件，然后转为style放到html的head中
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192  //表示小于8kb的图片会运用base64转为字符串，减少请求
            }
          }
        ]
      }
    ]
  },
  devServer: {
    // contentBase: './dist'  //webpack-dev-server 默认服务于根目录下的index.html,关键点："根目录"，"index.html",如果把index.html放到根目录下，这个配置就不需要了
  },
  plugins: [
    new CleanWebpackPlugin(),//默认情况下，这个插件将删除的WebPack的output.path目录下的所有文件,参数没有配置成功，不会？？？？？
    new HtmlWebpackPlugin({
      title: 'Custom template',//更改模板页面的title
      template: './index.html'//模板页面，根据这个页面去生成一个新的页面
    }),
  ]

};