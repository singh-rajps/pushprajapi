const router = require("express").Router()
const {adduserservice} = require('../../../services/userservice')

router.post('/adduser',adduserservice)

module.exports = router