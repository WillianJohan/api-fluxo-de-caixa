const { Model, DataTypes } = require('sequelize')

class Payment extends Model
{
    //Metodo padrão do sequelize
    static init(connection)
    {
        super.init({
            value: DataTypes.DOUBLE,
            date: DataTypes.DATE,
            is_done: DataTypes.BOOLEAN,
        },
        {
            sequelize: connection
        })
    }
}

module.exports = Payment