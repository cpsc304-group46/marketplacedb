var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'marketdb'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("");
  });
});
