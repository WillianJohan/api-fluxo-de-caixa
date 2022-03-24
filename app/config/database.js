module.exports = {
    dialect: 'postgres',
    host: 'tuffi.db.elephantsql.com',
    username: 'spqmrkzo',
    password: 's8GG7hnD6jr8lGGngKk4yjybR2fiIwXM',
    database: 'spqmrkzo',
    define: {
        timestamps: true, //Armazena informação de data de criação e alteração
        underscored: true, //Permite formato snake case (exemplo: grupo_usuarios)
    }
}

//postgres://spqmrkzo:s8GG7hnD6jr8lGGngKk4yjybR2fiIwXM@tuffi.db.elephantsql.com/spqmrkzo
//postgres://username:password@hostname/databasename