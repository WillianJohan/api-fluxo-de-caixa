const Receipt = require('../models/Receipt')

module.exports = {
    async index(req, res) {
        const receipt = await Receipt.findAll()
        return res.json(receipt)
    },
    
    async store(req, res) {
        // no corpo da requisição, envia valor, data de recibo 
        const { value, date, is_done } = req.body

        try{
            //Cria o registro de recibo
            const receipt = await Receipt.create({ value, date, is_done })

            //Retorna as informações em formato de json.
            return res.json(receipt)
        }catch(err){
            console.log('Não foi possivel criar o registro de recibo')
            console.log(err)
            return res.json({ value, date, is_done })
        }
    },

    async patch(req, res) {
        // Pega a referencia de quem estou querendo alterar
        const id = req.params.id
        const { value, date, is_done } = req.body
        
        try{
            const receipt = await Receipt.findOne({where: { id: req.params.id}})
            if(!receipt){
                console.log("Houve uma tentativa de alterar valores de um recibo que não existe. ID: " + req.params.id)
                return res.send({ Message : "Registro de recibo não existe!" })
            }
            
            receipt.value = value
            receipt.date = date
            receipt.is_done = is_done

            await receipt.save().then(
                console.log("Informaçoes de recibo alterado com sucesso!"),
                res.send({ message : "Recibo id:" + id + " Alterado!"})
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
            const receipt = await Receipt.findOne({where: { id: req.params.id}})
            if(!receipt){
                console.log("Houve uma tentativa de deletar um registro de recibo inexistente! Receipt ID: " + req.params.id)
                return res.send({ Message : "Registro de recibo não existe!" })
            }
            Receipt.destroy({where : { id : receipt.id}})
                .then(
                    console.log("Registro de recibo Removido com sucesso!"),
                    res.send({ message : "recibo de ID:" + receipt.id + " removido!" }))
                .catch(
                    console.log("problema ao remover o registro de recibo..."),
                    res.send({ message : "Não foi possivel remover o registro de recibo de ID:" + receipt.id }))
        }catch(err){
            console.log(err)
        }
    }

}