const logoutRouter = require('express').Router();

//Requer autorização => lista de pagamentos
logoutRouter.get('/', (req, res) => {
    res.json( { Message:"logout! => GET" } );
})


module.exports = logoutRouter;