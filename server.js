const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // res.send('hello world')
  res.send("<script>alert('aaaa')</script>")
})
app.get('/?data', (req, res) => {
  res.send(data)
})
app.listen(9090)