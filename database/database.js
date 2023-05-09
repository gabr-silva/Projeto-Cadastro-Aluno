/*IMPORTAÇÃO DO SEQUELIZE*/
const sequelize = require('sequelize');

//criar a conexão com o banco de dados
const conexao = new sequelize(
    'pw2_cadastro_de_aluno', //nome do banco
    'root', //nome do usuario
    '', //senha
    {
        host:'localhost', //local do host do banco 
        port:'3307', //porta do banco
        dialect:'mysql', //qual o tipo de banco sera utilizado
        timezone:'-03:00' //sei la
    }
);

module.exports = conexao;