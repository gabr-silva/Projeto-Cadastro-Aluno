const express = require('express');

const cursoModel = require('../model/cursoModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();


//rota para inserir dados no BD
router.post('/curso/inserir', (req, res)=>{
    
    let nome = req.body.nome;
    let periodo = req.body.periodo;
    let qtdeAluno = req.body.qtdeAluno;
    let modulo = req.body.modulo;

    cursoModel.create(
        {nome, periodo, qtdeAluno, modulo}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                mensagenStatus: 'Curso criado com sucesso'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                erroStatus: true,
                mensagenStatus: error
            });
        }
    )
});
//rota de seleção os dados do BD
router.get('/curso/selecionar', (req,res)=>{
    
    cursoModel.findAll()
    .then(
        (curso)=>{
            //console.log(cursos;
            res.json(curso);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

// Rota para alterar
router.put('/curso/alterar', (req,res)=>{

    let id = req.body.id;
    let nome = req.body.nome;
    let periodo = req.body.periodo;
    let qtdeAluno = req.body.qtdeAluno;
    let modulo = req.body.modulo;

    cursoModel.update(
        {nome, periodo, qtdeAluno, modulo},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'Curso alterado com sucesso'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

router.delete('/curso/excluir/:id', (req,res)=>{
    let id = req.params.id;
    console.log("ID: " + id);

    cursoModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensageStatus:'Curso excluido com sucesso'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;