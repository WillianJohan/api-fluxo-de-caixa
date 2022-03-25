const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy



//Verificadores ========================================================
function verifyUser(user){
    if(!user){
        throw new console.error('User does not exist.')
    }
}


async function verifyPassword(password, hashPass){
    const isValid = await bcrypt.compare(password, hashPass)
    if(!isValid){
        throw new console.error('email or password is not correct.')
    }
}

//Passport implementation =====================================================
passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, async (email, password, done) => {
        
        try{
            //Procura o usuario pelo email
            const user = await User.findOne({where: { email: email}})

            //Verifica usuario e senha
            verifyUser(user)
            await verifyPassword(password, user.passport)
            
            //Return Done
            done(null, user)
        }
        catch(err){
            done(err)
        }

    })
)

