const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/animal/:name', function (req, res) {
  const p = req.params
    console.log(p.name)
    
    res.send('야옹')
})

app.listen(4000)