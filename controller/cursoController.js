const express = require('express');

const cursoModel = require('../model/cursoModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

router.post('/curso/inserir', (reg, res)=>{
    let nome = req.body.nome
    let periodo = req.body.periodo
    let qtdeAluno = req.body.qtdeAluno
    let modulo = req.body.modulo

    cursoModel.create(
        {nome, periodo, qtdeAluno, modulo}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                mensagenStatus: 'Curso criado com sucesso'
            })
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                erroStatus: true,
                mensagenStatus: error
            })
        }
    )
})

// router.post('/curso/inserir')

module.exports = router;