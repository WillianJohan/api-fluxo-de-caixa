const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const authenticateStrategy = require('./Strategies/Authenticator')
//authenticateStrategy.config()

require('dotenv').config()
require('./database')

app.use(bodyParser.json());

const routes = require('./routes/routes')
app.use(routes)


app.listen(process.env.PORT, () => {
   console.log('API initialized.....')
   console.log('API listening on port: %d.....', process.env.PORT)
})
