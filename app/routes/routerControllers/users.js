const userRouter = require('express').Router();
const UserController = require('../../controllers/UserController')

//Importa os middlewares que verifica as permissões
const { client, admin } = require('../../middleware/Authenticate')


//Requer autorização => lista usuarios
userRouter.get('/', client, UserController.index)
userRouter.post('/create', admin, UserController.store)
userRouter.patch('/update/:id', admin, UserController.patch)
userRouter.post('/remove', admin, UserController.remove)


module.exports = userRouter;