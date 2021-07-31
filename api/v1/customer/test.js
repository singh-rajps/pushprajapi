const router = require("express").Router()

router.get("/test",(req,res)=>{
    res.send("Welcome to the Test")
})

module.exports = router