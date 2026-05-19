const express = require('express');
const app = express();

app.use(express.json());

//Rotas
const alunoRoutes = require('./routes/alunos');