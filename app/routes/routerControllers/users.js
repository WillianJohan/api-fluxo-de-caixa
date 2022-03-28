const userRouter = require('express').Router();
const UserController = require('../../controllers/UserController')
const passport = require('passport')

const checkAuth = require('../../middleware/Authenticate').bearer


//Requer autorização => lista usuarios
userRouter.get('/', checkAuth, UserController.index)
userRouter.post('/create', checkAuth, UserController.store)
userRouter.post('/remove', checkAuth, UserController.remove)


module.exports = userRouter;