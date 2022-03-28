const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

class User extends Model
{
    //Metodo padrão do sequelize
    static init(connection)
    {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            is_admin: DataTypes.BOOLEAN,
        },
        {
            sequelize: connection
        })
    }

    static async create(model){
        try {
            const hashPass = await this.generateHashPassword(model.password)
            model.password = hashPass
            
            super.create(model)
        }
        catch(err){
            console.log(err)
        }
    }

    static generateHashPassword(password)
    {
        const hashCost = 12 //custo de 2^12
        return bcrypt.hash(password, hashCost)
    }

}

module.exports = User