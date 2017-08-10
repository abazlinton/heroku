const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  setTimeout(()=>{res.send('Hello World!')}, 1000);
  
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 80!')
})