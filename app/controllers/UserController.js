const { user } = require('pg/lib/defaults');
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()
        return res.json(users)
    },
    
    async store(req, res) {
        // no corpo da requisição, envia o nome, email e senha
        const { name, email, password } = req.body;

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
    }
}