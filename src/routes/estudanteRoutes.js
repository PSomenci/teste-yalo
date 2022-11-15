const router = require('express-promise-router')();

const postestudanteValidator = require('../validation/postEstudante');
const estudanteController = require('../controllers/estudanteController');

// Rota para cadastro de estudante
router.post('/estudante', postestudanteValidator.postEstudante, postestudanteValidator.checkRules, estudanteController.createEstudante);

// Rota que lista os estudantes
router.get('/estudantes', estudanteController.getEstudantes);

// Rota que busca um estudante especifico
router.get('/estudante/:id', estudanteController.getOne);

// Rota para atualizar um estudante
router.put('/estudante/:id', estudanteController.atualizaEstudante);

// Rota para apagar o registro de um estudante
router.delete('/estudante/:id', estudanteController.apagaEstudante);

module.exports = router;
