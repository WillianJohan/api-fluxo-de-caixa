const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');


app.use(bodyParser.json());


const routes = require('./routes/routes')
app.use(routes)



app.listen(config.get('api.PORT'), () => {
    console.log('API initialized.....');
    console.log('API listening on port: %d.....', config.get('api.PORT'));
})