const express = require('express');
const app = express();

app.use(express.json());

//Rotas
const alunosRoutes = require('./routes/alunos');
app.use('/alunos', alunosRoutes);

const emprestimosRoutes = require('./routes/emprestimos');
app.use('/emprestimos', emprestimosRoutes);

const livrosRoutes = require('./routes/livros');
app.use('/livros', livrosRoutes);

module.exports = app;   