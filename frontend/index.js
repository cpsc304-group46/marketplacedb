const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nickjon20",
  database: 'marketdb'
});

con.connect()

var sql = "SELECT 1 + 1 AS solution"; 
con.query(sql, function (err, rows,fields) {
  if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function(req,res) {
  let post = req.body.Post;

  request(sql, function(err,response,body) {
    if(err) {
      res.render('index')
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

con.end()
