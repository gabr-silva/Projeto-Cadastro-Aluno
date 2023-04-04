const express = require ('express');
const router = express.Router();

/*rota de seleção*/
router.get('/aluno/selecionar', (req, res)=>{
    res.send('Rota do aluno seleção');
    
})
/* Rota de insenção*/
router.post('/aluno/inserir', (req,res)=>{
    res.send('rota do aluno inserir');
    
})

/* Rota de alteraçãp*/
router.put('/aluno/alterar', (req,res)=>{
    res.send('rota do aluno alteração!');

})

/* ROTA de exclusão*/
router.delete('/aluno/excluir', (req,res)=>{
    res.send('rota do aluno exclusão');

})



module.exports = router;