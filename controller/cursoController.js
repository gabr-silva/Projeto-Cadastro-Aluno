const express = require('express');

const cursoModel = require('../model/alunoModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

router.post('/curso/inserir')