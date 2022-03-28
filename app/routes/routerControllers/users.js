const userRouter = require('express').Router();
const UserController = require('../../controllers/UserController')
const passport = require('passport')

const authenticator = require('../../middleware/Authenticate')


//Requer autorização => lista usuarios
userRouter.get('/', UserController.index)
userRouter.post('/create', UserController.store)
userRouter.post('/remove', UserController.remove)


module.exports = userRouter;