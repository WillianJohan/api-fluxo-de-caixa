const paymentsRouter = require('express').Router();
const PaymentController = require('../../controllers/PaymentController');

//Importa os middlewares que verifica as permissões
const { client, admin } = require('../../middleware/Authenticate')

//Requer autorização => lista de pagamentos
paymentsRouter.get('/', client, PaymentController.index)
paymentsRouter.post('/create', admin, PaymentController.store)
paymentsRouter.patch('/update/:id', admin, PaymentController.patch)
paymentsRouter.post('/remove', admin, PaymentController.remove)


module.exports = paymentsRouter;