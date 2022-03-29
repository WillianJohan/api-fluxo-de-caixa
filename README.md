## Sobre
Essa API tem o proposito de ser um serviço de fluxo de caixa, sendo capaz de armazenar fluxo de caixa e gerar relatórios.

## Dependências utilizadas no projeto
```json
"dependencies": {
    "bcrypt": "^5.0.1",
    "body-parser": "^1.19.2",
    "config": "^3.3.7",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.3.3",
    "passport": "^0.5.2",
    "passport-http-bearer": "^1.0.1",
    "passport-local": "^1.0.0",
    "pg": "^8.7.3",
    "sequelize": "^6.17.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.15",
    "sequelize-cli": "^6.4.1"
  }
```

## Documentação

### ./app/server.js

Arquivo principal da aplicação, responsável por iniciar o servidor e definir configurações como utilização das rotas, inicializar o banco de dados, importar pacotes importantes como “body-parser” e etc...

### ./app/config

Possui o arquivo “database.js” que exporta as informações de conexão com o banco de dados.

### ./app/controllers

A pasta Controllers possui a implementação do comportamento de cada elemento da aplicação, em especial com os modelos estabelecidos na pasta ./models.

### ./app/database

O arquivo index.js define e inicializa a ponte de conexão com o banco de dados.

### ./app/database/migrations

Possui todo o histórico com os procedimentos de criação e alteração das tabelas do banco.

### ./app/middleware

Possui o middleware de autenticação utilizada em toda  a aplicação.

### ./app/models

Possui as definições de modelos, estruturas e classes utilizadas na aplicação.

### ./app/routes

O arquivo routes.js é responsável por definir e direcionar as rotas da aplicação. 

### ./app/routes/routerController

Possui a implementação de cada rota que foi definida em routes.js, definindo níveis de autenticação de acesso em cada rota, indicando o comportamento de cada uma.

### ./app/strategies

Possui as estratégias de login e autenticação com tokens, sendo referenciada no middleware de autenticação.

### Pendências

---

Algumas coisas ainda precisam ser implementadas, são elas:

- [ ]  Logout
- [ ]  Geração de relatórios
