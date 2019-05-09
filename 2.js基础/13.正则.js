// 正则常用方法：
// 1：test() ：在字符串中查找符合正则的内容，若找到就返回true，否则返回false
// 用法：正则.test(字符串)
// eg：判断是否是数组
const str1 = "12445365476554534232";
const re1 = /\D/; //\D 表示非数字
if (re1.test(str1)) {
  console.log("不全是数字");
} else {
  console.log("全是数字"); //全是数字
}
// 正则表达式常用规则：
/**
 * \s : 空格
 * \S : 非空格
 * \d : 数字
 * \D : 非数字
 * \w : 字符（字母，数字，下划线_)
 * \W : 非字符
 *  i : 忽略大小写，在正则表达式最后输入i，表示ignore，就是不区分大小写的意思:/B/i==>查找字符串中是否含有b 、B
 *  + ：至少出现一次，匹配不确定的次数，
 *  g ：global 意思就是全局匹配
 *  | ：或的意思
 */

/**
 * 2: search() 字符串中搜索符合正则的内容，搜到就返回首次出现的位置，失败就返回-1
 * 用法：字符串.search(正则)
 */
const str2 = "abfgewrfvfsgscagBsvsbagsdfscsdfe";
const re2 = /B/i;
console.log(str2.search(re2)); //1

/**
 * 3:match():在字符串中搜索符合规则的内容，搜索成功就返回内容，格式为数组，失败就返回null，
 * 用法：字符串.search(正则)
 */
const str3 = "aavv123sdsfs43323adafsadf55mm78mm9000ss00sdsssd";
const re3 = /\d+/g;
console.log(str3.match(re3)); //[ '123', '43323', '55', '78', '9000', '00' ]
// 没有+号就会一个一个的匹配：
console.log("asfda324dsfd24f4s555".match(/\d/g)); //[ '3', '2', '4', '2', '4', '4', '5', '5', '5' ]

/**
 * 4:replace() 查找符合正则的字符串，就替换成对应的字符串，返回替换后的内容
 * 用法：字符串.replace(正则，新的字符串/回调函数)
 * 在回调函数中，第一个参数指的是每次匹配成功的字符
 */
// eg: 把name替换成Tom
const str4 = "Hello ,are you  name. I am name's teacher";
const re4 = /name/g;
console.log(str4.replace(re4, "Tom")); //Hello ,are you  Tom. I am Tom's teacher
// eg: 把name 或者 lily替换成Tom
const str4 = "Hello ,are you  name. I am lily's teacher";
const re4 = /name|lily/g;
console.log(str4.replace(re4, "Tom")); //Hello ,are you  Tom. I am Tom's teacher,Name
// eg: 实现替换的字符数量相等,需要用到回调函数
// 把北京和天安门换成*号
const str = "我爱北京天安门，天安门你好！";
const re = /北京|天安门/g;
const newStr = str.replace(re, function(str) {
  console.log("str", str);
  let result = "";
  for (let i = 0, len = str.length; i < len; i++) {
    result += "*";
  }
  return result;
});
console.log("newstr", newStr);
