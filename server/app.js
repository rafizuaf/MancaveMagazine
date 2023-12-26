if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const router = require('./routers')
const errorHandlers = require('./middlewares/errorHandlers')
const app = express()
const cors =  require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

app.use(router)

app.use(errorHandlers)

module.exports = app