const express = require('express');
const users = require('./users');
const posts = require('./posts');
const ControllerPost = require('../controllers/ControllerPost');
const router = express.Router();

router.get('/', ControllerPost.getAllPosts)
router.use('/users', users)
router.use('/posts', posts)


module.exports = router