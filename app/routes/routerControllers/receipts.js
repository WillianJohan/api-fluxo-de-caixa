const receiptsRouter = require('express').Router();

//Requer autorização => lista de recebimentos
receiptsRouter.get('/', (req, res) => {
    res.json( { Message:"Recebimentos! => GET" } );
})


module.exports = receiptsRouter;