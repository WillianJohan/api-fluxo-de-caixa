const tokenController = require('./TokenController')

module.exports = {
    
    Login(req, res) {
        const token = tokenController.CreateTokenJWT(req.user)
        res.set('Authorization', token)
        res.status(204).send()
    }
    
}