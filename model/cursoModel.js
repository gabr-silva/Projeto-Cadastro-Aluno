const sequelize = require('sequelize');

const conexao = require('../database/database');

//definição da tabela de cursos

const curso = conexao.define(
    'tbl_curso',
    {
        nome:{
            type: sequelize.STRING,
            allowNull: false
        },
        periodo:{
            type: sequelize.STRING,
            allowNull: false,
        },
        qtdeAluno:{
            type:sequelize.INTEGER,
            allowNull: false
        },
        modulo:{
            type:sequelize.STRING,
            allowNull: false
        }
    }
);

// curso.sync({force:true});

module.exports = curso;