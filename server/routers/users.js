const express = require('express')
const ControllerUser = require('../controllers/ControllerUser')
const users = express.Router()

users.post('/login', ControllerUser.login)
users.post('/register', ControllerUser.register)


module.exports = users