const express = require('express')
var path = require('path')
const app = express()
const port = 3000

app.use(express.static('pysakkihaku'));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'pysakkihaku/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})