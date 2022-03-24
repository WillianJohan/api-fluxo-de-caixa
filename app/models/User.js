const { Model, DataTypes } = require('sequelize')

class User extends Model
{
    //Metodo padrão do sequelize
    static init(connection)
    {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize: connection
        })
    }
}

module.exports = User