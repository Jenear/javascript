# token

- 1：token 在 login 登录的时候返回在 code 的 data 中，然后将 token 存到本地 cookie 中
- 2：每次发请求向后台请求数据的时候都把 token 从 cookie 中取出，然后放到 request header 中发送到后台，头部设置一个 Authorization 对应的值为 token
