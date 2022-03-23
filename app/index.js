const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');


app.use(bodyParser.json());


const routes = require('./routes/routes');
const database = require('./database/database');
app.use(routes)


//TESTE do banco de dados
( async () => {

    const db = require('./database/database')
    const user = require('./database/models/user')
    await db.sync()
})


app.listen(config.get('api.PORT'), () => {
    console.log('API initialized.....');
    console.log('API listening on port: %d.....', config.get('api.PORT'));
})