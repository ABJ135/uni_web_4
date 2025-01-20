const express = require('express')
const router = express.router()

const controller = require('../controller/user.controller')

router.post('/register',controller.register)

