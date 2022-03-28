const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const User      = require('../models/User')
const Payment   = require('../models/Payment')
const Receipt   = require('../models/Receipt')

const connection = new Sequelize(dbConfig)

User.init(connection)
Payment.init(connection)
Receipt.init(connection)

module.exports = connection