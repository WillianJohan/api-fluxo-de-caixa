const jwt = require('jsonwebtoken')

module.exports = {
    CreateTokenJWT(user){
        const payload = { id: user.id }
        const newToken = jwt.sign(payload, process.env.KEY_JWT, { expiresIn : '15m' });
        return newToken;
    }
}