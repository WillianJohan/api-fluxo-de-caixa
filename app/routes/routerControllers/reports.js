const reportsRouter = require('express').Router();

//Requer autorização => lista relatorios
reportsRouter.get('/', (req, res) => {
    res.json( { Message:"Relatorios! => GET" } );
})


module.exports = reportsRouter;