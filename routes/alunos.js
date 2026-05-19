const express = require('express');
const routes = express.Router();

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