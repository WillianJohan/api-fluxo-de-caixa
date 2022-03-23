const routes = require('express').Router();


//Define Routes =====================================
const users = require('./modules/users')
const payments = require('./modules/payments')
const reports = require('./modules/reports')
const receipts = require('./modules/receipts')


//Use Routes ========================================
routes.get('/', (req, res, next) => {
    res.json({ message: "It's Working" });
})

routes.use('/users', users)
routes.use('/payments', payments)
routes.use('/reports', reports)
routes.use('/receipts', receipts)





module.exports = routes;