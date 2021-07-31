const router = require("express").Router()
const {listAlluser} = require('../../../services/userservice')

router.get('/list',listAlluser)

module.exports = router