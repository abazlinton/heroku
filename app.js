const express = require('express')
const app = express()

console.log(process.env.PORT);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})