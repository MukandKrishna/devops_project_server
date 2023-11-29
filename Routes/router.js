const express = require('express')
const router = express.Router()
const con = require('../Controller/controller')

router.get('/get',con.get)

module.exports = router