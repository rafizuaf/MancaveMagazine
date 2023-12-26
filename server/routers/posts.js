const express = require('express')
const ControllerPost = require('../controllers/ControllerPost')
const authentication = require('../middlewares/authentication')
const posts = express.Router()

posts.post('/add', authentication, ControllerPost.addPost)

module.exports = posts