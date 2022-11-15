const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL',
  });
});

module.exports = router;
