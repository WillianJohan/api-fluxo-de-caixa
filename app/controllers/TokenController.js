const jwt = require('jsonwebtoken')

module.exports = {
    CreateTokenJWT(user){
        const payload = { id: user.id }
        const newToken = jwt.sign(payload, process.env.KEY_JWT);
        return newToken;
    }
}