const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const isPalindrome = require('./functions')

app.use(bodyParser.json())

const db = require('./db.json')
app.get('/produtos', function (req, res) {
    var produtos = db.produtos
  res.send(produtos)
})
app.get('/produtos/:id',function(req,res){
    const_id = req.params.id
    res.send(_id)
})

app.listen(8000)