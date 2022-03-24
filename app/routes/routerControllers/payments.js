const paymentsRouter = require('express').Router();

//Requer autorização => lista de pagamentos
paymentsRouter.get('/', (req, res) => {
    res.json( { Message:"payments! => GET" } );
})


module.exports = paymentsRouter;