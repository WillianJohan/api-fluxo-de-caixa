const receiptRouter = require('express').Router();
const ReceiptController = require('../../controllers/ReceiptController');

//Importa os middlewares que verifica as permissões
const { client, admin } = require('../../middleware/Authenticate')

//Requer autorização => lista de recibos
receiptRouter.get('/', client, ReceiptController.index)
receiptRouter.post('/create', admin, ReceiptController.store)
receiptRouter.patch('/update/:id', admin, ReceiptController.patch)
receiptRouter.post('/remove', admin, ReceiptController.remove)


module.exports = receiptRouter;