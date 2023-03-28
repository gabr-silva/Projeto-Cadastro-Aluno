//importar o express
const express = require ('express');

//instanciar express
const app = express();

app.use (express.json());

app.get('/main', (req, res) => {
    res.send('Ola Mundo');
});


//criação do servidor HTTP
app.listen(3000, ()=>{
    console.log('servidor em teste Em http://localhost:3000/main');
});