const express = require('express')
const router = express.Router()

const controller = require('../controller/user.controller')

router.post('/register',controller.register)

router.get('/login',controller.login)

// router.get('/profile',controller.profile)

module.exports = router