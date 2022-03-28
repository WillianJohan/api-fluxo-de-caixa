const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()
        return res.json(users)
    },
    
    async store(req, res) {
        // no corpo da requisição, envia o nome, email e senha
        const { name, email, password } = req.body

        try{
            //Cria o usuario
            const user = await User.create({ name, email, password })

            //Retorna as informações em formato de json.
            return res.json(user)
        }catch(err){
            console.log('Não foi possivel criar usuario')
            console.log(err)
            return res.json({ name, email, password})
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