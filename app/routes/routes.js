const routes = require('express').Router();
const authenticator = require('../middleware/Authenticate')

//Define Routes =====================================
const users = require('./routerControllers/users')
const login = require('./routerControllers/login')
const logout = require('./routerControllers/logout')
const payments = require('./routerControllers/payments')
const reports = require('./routerControllers/reports')
const receipts = require('./routerControllers/receipts')


//Use Routes ========================================
routes.get('/', (req, res) => {
    res.json({ message: "Seja Bem Vindo!" });
})


routes.use('/users',    authenticator.bearer, users)
routes.use('/login',    authenticator.bearer, login)
routes.use('/logout',   authenticator.bearer, logout)
routes.use('/payments', authenticator.bearer, payments)
routes.use('/reports',  authenticator.bearer, reports)
routes.use('/receipts', authenticator.bearer, receipts)





module.exports = routes;