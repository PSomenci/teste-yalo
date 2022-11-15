/* eslint-disable consistent-return */
const { body, validationResult } = require('express-validator');

// Valida as informações vindas do body para cadastrar o estudante
exports.postEstudante = [
  body('cpf', 'cpf é obrigatorio').exists(),
  body('name', 'name é obrigatorio').exists(),
  body('email', 'email é obrigatorio').exists(),
  body('id_colegio', 'id_colegio é obrigatorio').exists(),
  body('id_turma', 'id_turma é obrigatorio').exists(),
  body('cpf', 'cpf não pode ser vazio').notEmpty(),
  body('name', 'name não pode ser vazio').notEmpty(),
  body('email', 'email não pode ser vazio').notEmpty(),
  body('id_colegio', 'id_colegio não pode ser vazio').notEmpty(),
  body('id_turma', 'id_turma  não pode ser vazio').notEmpty(),
];

exports.checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
