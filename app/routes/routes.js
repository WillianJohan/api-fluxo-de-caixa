const routes = require('express').Router();


//Define Routes =====================================
const users = require('./routerControllers/users')
const login = require('./routerControllers/login')
const logout = require('./routerControllers/logout')
const payments = require('./routerControllers/payments')
const reports = require('./routerControllers/reports')
const receipts = require('./routerControllers/receipts')


//Use Routes ========================================
routes.get('/', (req, res, next) => {
    res.json({ message: "Seja Bem Vindo!" });
})

routes.use('/users', users)
routes.use('/login', login)
routes.use('/logout', logout)
routes.use('/payments', payments)
routes.use('/reports', reports)
routes.use('/receipts', receipts)





module.exports = routes;