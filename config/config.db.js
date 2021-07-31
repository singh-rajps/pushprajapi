const mysql =require('mysql');


var pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"testdb"
  });
  
  pool.connect((err)=>{
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports= pool;