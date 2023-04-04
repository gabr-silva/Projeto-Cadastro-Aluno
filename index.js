//importar o express
const express = require ('express');

//instanciar express
const app = express();

app.use (express.json());

/*HABILITA A APLICAÇÃO A MANIPULAR DADOS DE UM CORPO DE DADOS*/
app.use(express.urlencoded({extended:true}));

/*  Criação das rotas de aluno */
const alunoController = require('./controller/alunoController');
app.use('/', alunoController);


//criação do servidor HTTP
app.listen(3000, ()=>{
    console.log('servidor em funcionamento rota: http://localhost:3000');
})