const passport = require('passport')

module.exports = {
    local: (req, res, next) => {
        passport.authenticate(
            'local', 
            { session : false }, 
            (err, user, info) => 
            {
                //Se tiver Erro, identifica o erro para retornar ao usuario
                if(err)
                {
                    var errorResponse

                    switch (err.name) {
                        case 'InvalidArgumentError':
                            errorResponse = res.status(401).json({ erro: err.message })
                            break;
                    
                        default: //Erro que não esperando
                            errorResponse = res.status(500).json({ erro: err.message })
                            break;
                    }
                    
                    return errorResponse
                }
                
                if(!user){
                    return res.status(401).json()
                }

                req.user = user
                return next()
            }
        )(req, res, next);
    },

    bearer: (req, res, next) => {
        passport.authenticate(
            'bearer',
            { session : false },
            (err, user, info) => {

                if(err){
                    var errorResponse
                    
                    switch (err.name) {
                        case 'JsonWebTokenError':
                            errorResponse = res.status(401).json({ erro : err.message })
                            break;
                        case 'TokenExpiredError':
                            errorResponse = res.status(401).json({ erro : err.message, expiredIn : err.expiredAt })
                            break;
                        default: //Erro que não estamos esperando
                            errorResponse = res.status(500).json({ erro : err.message })
                            break;
                    }

                    return errorResponse
                }

                if(!user){
                    return res.status(401).json()
                }

                req.user = user
                return next()
            }
        )(req, res, next);
    }
    
}