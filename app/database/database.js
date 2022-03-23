//const mysql = require('mysql');
//const config = require('../config')
const Sequelize = require('sequelize');

//TODO: Substituir hardCode com o arquivo de config.
const database = new Sequelize(
    'fluxodecaixa_db',
    'root',
    '123456',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306
    }
)

//module exports
module.exports = database;