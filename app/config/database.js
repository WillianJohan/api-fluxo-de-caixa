module.exports = {
    dialect: 'postgres',
    host: 'postgres://spqmrkzo:s8GG7hnD6jr8lGGngKk4yjybR2fiIwXM@tuffi.db.elephantsql.com/spqmrkzo',
    username: 'spqmrkzo',
    password: 's8GG7hnD6jr8lGGngKk4yjybR2fiIwXM',
    database: 'fluxodecaixa_db',
    define: {
        timestamps: true, //Armazena informação de data de criação e alteração
        underscored: true, //Permite formato snake case (exemplo: grupo_usuarios)
    }
}