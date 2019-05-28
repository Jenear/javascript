# i18N 多语言 react-intl

主要实现原理：多个 json 进行多语言配置，然后再根据选择的语言做一个映射

react-intl 提供组件和 api 两种方式
下面看下常用的组件：

- IntlProvider： 需要提供 locale 和 messages；
  locale 是告诉组件用的是什么语言，messages 一般是一共方法，根据提供的 locale 来确定需要用到的语言
- FormattedMessage：有几个属性：
  id：json 中对应的 key 值，
  如果设置变量可以用 values 来实现，
  defaultMessage：如果 id 对应的 key 值么有找到，就会显示 defaultMessage 的值
  tagName：默认 FormattedMessage 被解析为 span 标签，如果加上 tagName 在解析的时候就是根据 tagName 标签去接卸
- FormattedDate 通过 value 来显示时间

- 注意：addLocaleData([...zhLocaleData, ...enLocaleData]);必须要写到，否则会报错

## 多语言碰到的问题：

1：翻译需要够准确：简体-繁体-英语
2：如果有标点符号，需要使用正确的标点符号,逗号不明显，但是句号很明显
3：样式问题，英语和汉语的长度不一样，需要进行样式调节

```
问题：
都不能实现弹框时直接返回的问题作为值进行显示？？？这个问题不太明白
```
