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
                    if(err.name == 'InvalidArgumentError'){
                        return res.status(401).json({ erro: err.message })
                    }
    
                    //Erro que não estamos esperando
                    return res.status(500).json({ erro: err.message })
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
                    if(err.name === 'JsonWebTokenError'){
                        return res.status(401).json({ erro : err.message })
                    }
                    //Erro que não estamos esperando
                    return res.status(500).json({ erro : err.message })
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