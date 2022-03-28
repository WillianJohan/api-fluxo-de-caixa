module.exports = {
    dialect: 'postgres',
    host: 'tuffi.db.elephantsql.com',
    username: 'spqmrkzo',
    password: process.env.DATABASE_PASSWORD,
    database: 'spqmrkzo',
    define: {
        timestamps: true, //Armazena informação de data de criação e alteração
        underscored: true, //Permite formato snake case (exemplo: grupo_usuarios)
    }
}
