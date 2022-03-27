const loginRouter = require('express').Router();
const LoginController = require('../../controllers/LoginController')

// Importa o middleware
const passport = require('passport')

console.log('teste')
//Requer autorização => lista usuarios
loginRouter.post('/', passport.authenticate('local', {session : false}), LoginController.Login) 

module.exports = loginRouter;