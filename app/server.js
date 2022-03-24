const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const config = require('config') || 3000;
require('./database')

app.use(bodyParser.json());

const routes = require('./routes/routes')
app.use(routes)


app.listen(3000, () => {
   console.log('API initialized.....')
   console.log('API listening on port: %d.....',3000)
})
