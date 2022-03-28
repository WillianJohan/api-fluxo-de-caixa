const passport = require('passport')



function HandleErrors(err, res){
    
    var errorResponse
    
    switch (err.name) {
        case 'InvalidArgumentError':
            errorResponse = res.status(401).json({ erro: err.message })
            break;
        case 'JsonWebTokenError':
            errorResponse = res.status(401).json({ erro : err.message })
            break;
        case 'TokenExpiredError':
            errorResponse = res.status(401).json({ erro : err.message, expiredIn : err.expiredAt })
            break;
        default: //Erro não esperado
            errorResponse = res.status(500).json({ erro : err.message })
            break;
    }

    return errorResponse
}




module.exports = {
    local: (req, res, next) => {
        passport.authenticate(
            'local', 
            { session : false }, 
            (err, user, info) => 
            {
                //Se tiver Erro, identifica o erro para retornar ao usuario
                if(err)     return HandleErrors(err, res)
                if(!user)   return res.status(401).json()

                req.user = user
                return next()
            }
        )(req, res, next);
    },

    //Autenticadores ======================================================================================================
    client: (req, res, next) => {
        passport.authenticate(
            'bearer',
            { session : false },
            (err, user, info) => {

                if(err)     return HandleErrors(err, res)
                if(!user)   return res.status(401).json()

                req.user = user
                return next()
            }
        )(req, res, next);
    },

    admin: (req, res, next) => {
        passport.authenticate(
            'bearer',
            { session : false },
            (err, user, info) => {

                if(err)             return HandleErrors(err, res)
                if(!user)           return res.status(401).json()
                if(!user.is_admin)  return res.status(401).json( { erro : "Usuario Não Autorizado" } )

                req.user = user
                return next()
            }
        )(req, res, next);
    }

    
}