const config = require("../config/config.db")

module.exports = {
  adduserservice:  (req, res)=> {

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    
    var sql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
    config.query(sql,(err, data)=>{
    if (err) throw err;
    res.status(200).send("record inserted");
    });
  },
  listAlluser:(req,res)=>{
    try {
      const sqlQuery = `select id , name , email from users`;
      congig.query(sqlQuery,(err,resdata)=>{
        if(err)throw err;
        res.send({
          status:200,
          msg:"user list",
          data:resdata
        })
      })
    } catch (error) {
      res.send({
        status:500,
        msg:"something want wrong",
        err:err
      })
    }

  }
  

}