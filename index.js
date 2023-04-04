//importar o express
const express = require ('express');

//instanciar express
const app = express();

app.use (express.json());

/*  Criação das rotas de aluno */
const categoriaController = require('./controller/alunoController');
app.use('/', categoriaController);


//criação do servidor HTTP
app.listen(3000, ()=>{
    console.log('servidor em teste');
})