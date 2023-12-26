const express = require('express');
const users = require('./users');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.send('Online')
    } catch (error) {
        next(error);
    }
})
router.use('/users', users)


module.exports = router