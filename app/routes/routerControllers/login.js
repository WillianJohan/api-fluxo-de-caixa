const loginRouter = require('express').Router();
const LoginController = require('../../controllers/LoginController')
const authenticate = require('../../middleware/Authenticate')

//Requer autorização => lista usuarios
loginRouter.post('/', authenticate.local, LoginController.Login) 

module.exports = loginRouter;