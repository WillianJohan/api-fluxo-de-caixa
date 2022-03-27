const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy



//Verificadores ========================================================
async function findUserByEmailFromDatabase(email){
    const user = await User.findOne({where: { email: email}})
    
    // Se não existe, retorna um erro.
    if(!user){
        throw console.error('User does not exist.')
    }
    return user
}


async function checkValidPassword(password, hashPass){
    const isValid = await bcrypt.compare(password, hashPass) //Compara senha

    // Se tiver errada, retorna erro.
    if(!isValid){
        throw console.error('email or password is not correct.')
    }
}




//Passport implementation =====================================================
passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, 
    async (email, password, done) => {
        console.log('/login/ => Passport>local Authenticator')
        try{
            const user = await findUserByEmailFromDatabase(email)   //Procura o usuario pelo email
            await checkValidPassword(password, user.password)       //Compara a senha com a senha do banco
            done(null, user)                                        //Se tiver tudo OK, retorna o usuario
        }
        catch(err){
            done(err)
        }
    })
)

