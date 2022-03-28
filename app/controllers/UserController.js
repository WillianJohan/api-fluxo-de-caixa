const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()
        return res.json(users)
    },
    
    async store(req, res) {
        // no corpo da requisição, envia o nome, email e senha
        const { name, email, password, is_admin } = req.body

        try{
            //Cria o usuario
            const user = await User.create({ name, email, password, is_admin })

            //Retorna as informações em formato de json.
            return res.json(user)
        }catch(err){
            console.log('Não foi possivel criar usuario')
            console.log(err)
            return res.json({ name, email, password, is_admin })
        }
    },

    async patch(req, res) {
        // Pega a referencia de quem estou querendo alterar
        const id = req.params.id
        const { name, email, password, is_admin } = req.body
        
        try{
            const user = await User.findOne({where: { id: req.params.id}})
            if(!user){
                console.log("Houve uma tentativa de alterar valores de um usuario que não existe. ID: " + req.params.id)
                return res.send({ Message : "Usuario não existe!" })
            }
            
            user.name = name
            user.email = email
            user.password = await User.generateHashPassword(password)
            user.is_admin = is_admin

            await user.save().then(
                console.log("Usuario alterado com sucesso!"),
                res.send({ message : "Usuario id:" + id + " Alterado!"})
            ).catch(
                console.log(err)
            )

        }catch(err){
            console.log(err)
        }
    },

    async remove(req, res) {
        const { email } = req.body
        try{
            const user = await User.findOne({where: { email: email}})
            if(!user){
                console.log("Houve uma tentativa de deletar um usuario inexistente! USER: " + email)
                return res.send({ Message : "Usuario não existe!" })
            }
            User.destroy({where : { id : user.id}})
                .then(
                    console.log("Usuario Removido com sucesso!"),
                    res.send({ message : "Usuario " + user.name + " removido!" }))
                .catch(
                    console.log("problema ao remover o usuario..."),
                    res.send({ message : "Usuario " + user.name + " removido!" }))
        }catch(err){
            console.log(err)
        }
    }

}