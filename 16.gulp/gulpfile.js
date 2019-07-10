const gulp = require('gulp');
const $ = require('gulp-load-plugins')()//默认引进来是一个函数，所以需要调用下，调用之后返回的是要给对象

//由于引进了gulp-load-plugins，所以下面的这些不需要引入，直接使用$.caoncat 这种形式就可以进行运用，因为gulp-load-plugins模块，
// 可以加载package.json文件中所有的gulp模块

// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');
// const babel = require('gulp-babel');
// const less = require('gulp-less');
// const cssClean = require('gulp-clean-css');
// const htmlMin = require('gulp-htmlmin');
// const flatten = require('gulp-flatten');
// const livereload = require('gulp-livereload');
// const connect = require('gulp-connect');//gulp-connect 内置一个微型服务器

const open = require('open')

gulp.task('js', function () {
  return gulp.src('src/js/*.js')//找到目标原文件，将数据读取到gulp的内存
    .pipe($.concat('all.js'))//合并文件，并重新定义一个文件的名称：all.js
    .pipe(gulp.dest('dist/js/'))//临时输出文件到本地
    .pipe($.babel({ presets: ['@babel/env'] }))//对es6语法进行解析
    .pipe($.uglify())//压缩js文件
    .pipe($.rename({ suffix: '.min' }))// 重命名
    .pipe(gulp.dest('dist/js/'))//输出文件到本地
    .pipe($.livereload())//实现实时刷新，不写好像也是可以实现实时刷新的，不过官网上有些，我们最好也用下为好
    .pipe($.connect.reload());//实现实时刷新


});
//编译less文件
gulp.task('less', function () {
  return gulp.src('src/less/*.less')
    .pipe($.less())//编译less文件为css文件，而且不需要该名字，他说把less文件的后缀名改为css文件后缀
    .pipe(gulp.dest('src/css/'))
    .pipe($.livereload())//实现实时刷新，不写好像也是可以实现实时刷新的，不过官网上有些，我们最好也用下为好
    .pipe($.connect.reload());//实现实时刷新


})
// 合并压缩css
gulp.task('css', ['less'], function () {
  return gulp.src('src/css/*.css')//找到源文件
    .pipe($.concat('build.css'))//合并文件和js的合并方法是一样的，先合并和压缩
    .pipe(gulp.dest('dist/css/'))//临时输出文件
    .pipe($.rename({ suffix: '.min' }))//可以先重命名再压缩，也可以压缩再次重命名
    .pipe($.cleanCss({ compatibility: 'ie8' }))//兼容ie8浏览器,压缩css
    .pipe(gulp.dest('dist/css/'))//输出.min文件
    .pipe($.livereload())//实现实时刷新，不写好像也是可以实现实时刷新的，不过官网上有些，我们最好也用下为好
    .pipe($.connect.reload());//实现实时刷新


});

//压缩html
gulp.task('html', function () {
  return gulp.src('index.html')//找到源文件
    .pipe($.htmlmin({ collapseWhitespace: true }))//压缩空格
    .pipe(gulp.dest('dist/'))//输出文件到本地
    .pipe($.livereload())//实现实时刷新，不写好像也是可以实现实时刷新的，不过官网上有些，我们最好也用下为好
    .pipe($.connect.reload());//实现实时刷新

})

//监视任务：(半自动)
gulp.task('watch', ['default'], function () {
  //开启监听
  livereload.listen();
  // 确认监听的目标，以及绑定对应的任务
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch(['src/less/*.less', 'src/css/*.css'], ['css']);
})

// 监视任务（全自动）
gulp.task('server', ['default'], function () {
  $.connect.server({
    root: 'dist',
    livereload: true,//开启实时监听
    port: 5000
  })
  //open 插件可以自动打开指定的链接
  open('http://localhost:5000')
  // 确认监听的目标，以及绑定对应的任务
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch(['src/less/*.less', 'src/css/*.css'], ['css']);

})


gulp.task('default', ['js', 'css', 'html'])