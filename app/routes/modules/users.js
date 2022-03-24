const userRouter = require('express').Router();
const UserController = require('../../controllers/UserController')

//Requer autorização => lista usuarios
userRouter.get('/', UserController.index)
userRouter.post('/create', UserController.store)


module.exports = userRouter;