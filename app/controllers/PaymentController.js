const Payment = require('../models/Receipt')

module.exports = {
    async index(req, res) {
        const paymnents = await Payment.findAll()
        return res.json(paymnents)
    },
    
    async store(req, res) {
        // no corpo da requisição, envia valor, data de pagamento 
        const { value, date, is_done } = req.body

        try{
            //Cria o registro de pagamento
            const payment = await Payment.create({ value, date, is_done })

            //Retorna as informações em formato de json.
            return res.json(payment)
        }catch(err){
            console.log('Não foi possivel criar o registro de pagamento')
            console.log(err)
            return res.json({ value, date, is_done })
        }
    },

    async patch(req, res) {
        // Pega a referencia de quem estou querendo alterar
        const id = req.params.id
        const { value, date, is_done } = req.body
        
        try{
            const payment = await Payment.findOne({where: { id: req.params.id}})
            if(!payment){
                console.log("Houve uma tentativa de alterar valores de um pagamento que não existe. ID: " + req.params.id)
                return res.send({ Message : "Registro de pagamento não existe!" })
            }
            
            payment.value = value
            payment.date = date
            payment.is_done = is_done

            await payment.save().then(
                console.log("Informaçoes de pagamento alterado com sucesso!"),
                res.send({ message : "Pagamento id:" + id + " Alterado!"})
            ).catch(
                console.log(err)
            )

        }catch(err){
            console.log(err)
        }
    },

    async remove(req, res) {
        const id = req.params.id
        try{
            const payment = await Payment.findOne({where: { id: req.params.id}})
            if(!payment){
                console.log("Houve uma tentativa de deletar um registro de pagamento inexistente! Payment ID: " + req.params.id)
                return res.send({ Message : "Registro de pagamento não existe!" })
            }
            Payment.destroy({where : { id : payment.id}})
                .then(
                    console.log("Registro de pagamento Removido com sucesso!"),
                    res.send({ message : "Pagamento de ID:" + payment.id + " removido!" }))
                .catch(
                    console.log("problema ao remover o registro de pagamento..."),
                    res.send({ message : "Não foi possivel remover o registro de pagamento de ID:" + payment.id }))
        }catch(err){
            console.log(err)
        }
    }

}