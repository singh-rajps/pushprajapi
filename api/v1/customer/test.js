const router = require("express").Router()

router.get("/test",(req,res)=>{
    res.send("Test for pushpa branch")
})

module.exports = router