const receiptsRouter = require('express').Router();

//Requer autorização => lista de recebimentos
receiptsRouter.get('/', (req, res, next) => {
    res.json( { Message:"Recebimentos! => GET" } );
})


module.exports = receiptsRouter;