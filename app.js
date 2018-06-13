const express = require('express')
const pug = require('pug')

const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

let rowlist = [
  {id:1,name:"xxxx"},
  {id:2,name:"x111"},
  {id:3,name:"x222"},
  {id:4,name:"x333"},
  {id:5,name:"x444"}
]
let i=6

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/delete/:id', function (req, res) {
  let id = parseInt(req.params.id)
  rowlist = rowlist.filter(function(data){
    return data.id !== id
  })
  res.redirect("/list")
})

app.get('/list', function (req, res) {
  res.render('list',{list:rowlist})
})

app.post("/input", function(req,res){
  // console.log("111111")
  // let id = parseInt(i);
  rowlist = rowlist.concat({id:i,name:req.body.msg})
  i++
  res.render('list',{list:rowlist})
})



app.get('*', function (req, res) {
  res.render('index', { title: 'Hey', message: 'todolist' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

