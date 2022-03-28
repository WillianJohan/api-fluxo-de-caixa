const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy

const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { InvalidArgumentError } = require('../models/CustomErrors');


// METODOS AUXILIARES =====================================================
async function findUserByEmailFromDatabase(email){
    const user = await User.findOne({where: { email: email}})
    
    // Se não existe, retorna um erro.
    if(!user){
        throw new InvalidArgumentError('Não existe usuário com esse e-mail!');
    }
    return user
}


async function checkValidPassword(password, hashPass){
    const isValid = await bcrypt.compare(password, hashPass) //Compara senha

    // Se tiver errada, retorna erro.
    if(!isValid){
        throw new InvalidArgumentError('E-mail ou senha inválidos!');
    }
}




//Passport implementação de casos de uso  ====================================
passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, 
    async (email, password, done) => {
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


passport.use(
    new BearerStrategy(
        async (token, done) => {
            try{
                const payload = jwt.verify(token, process.env.KEY_JWT)  //Verifica se o token esta valido
                const user = await User.findByPk(payload.id)            //Resgata o usuario
                done(null, user)
            }
            catch(err){
                done(err)
            }
        }
    )
)