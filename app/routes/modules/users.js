const userRouter = require('express').Router();

//Requer autorização => lista usuarios
userRouter.get('/', (req, res, next) => {
    res.json( { Message:"users! => GET" } );
})


module.exports = userRouter;