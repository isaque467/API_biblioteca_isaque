const express = require('express');
const routes = express.Router();
const db = require('../db');
const dotenv = require('dotenv');

routes.get('/', (req, res) => {
    db.query('SELECT * FROM alunos', (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar alunos' });
      } else {
        res.json(results);
      }
    });
  });



module.exports = routes;