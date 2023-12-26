const express = require('express');
const users = require('./users');
const posts = require('./posts');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.send('Online')
    } catch (error) {
        next(error);
    }
})
router.use('/users', users)
router.use('/posts', posts)


module.exports = router