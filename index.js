//importar o express
const express = require ('express');

//instanciar express
const app = express();

app.use (express.json);


//criação do servidor HTTP
app.listen(3000, ()=>{
    console.log('servidor em teste');
})