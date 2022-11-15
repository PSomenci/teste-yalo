const { deleteEstudante } = require('../services/apagaEstudanteService');
const { atualizaEstudante } = require('../services/atualizaEstudanteService');
const { criaEstudante } = require('../services/createEstudanteService');
const { findEstudante } = require('../services/findEstudanteService');
const { listaEstudantes } = require('../services/listaEstudantesService');

/*
  Exemplo de body para cadastro do estudante
  {
    "cpf": "254123698",
    "name": "josésilva",
    "email": "jose@silva.com",
    "id_colegio": 2,
    "id_turma": 5,
    "score": 8.0
  }
*/

exports.createEstudante = async (req, res, next) => {
  try {
    const body = {
      cpf: req.body.cpf,
      name: req.body.name,
      email: req.body.email,
      id_colegio: req.body.id_colegio,
      id_turma: req.body.id_turma,
      score: req.body.score,
    };

    const response = await criaEstudante(body);

    return res.status(response.status).json(response.json);
  } catch (error) {
    return next(error);
  }
};

/*
Exemplo em curl da listagem dos estudantes com filtros
curl --request GET \
  --url 'http://localhost:3000/api/estudantes?idColegio=2&idTurma=1&score=4'
*/

exports.getEstudantes = async (req, res, next) => {
  try {
    const { idColegio, idTurma, score } = req.query;

    const response = await listaEstudantes(idColegio, idTurma, score);

    return res.status(response.status).json(response.json);
  } catch (error) {
    return next(error);
  }
};

/*
Exemplo em curl para listar um estudante especifico
curl --request GET \
  --url http://localhost:3000/api/estudante/4
*/

exports.getOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await findEstudante(id);

    return res.status(response.status).json(response.json);
  } catch (error) {
    return next(error);
  }
};

/*
Exemplo em curl para atualizar um registro de um estudante
curl --request PUT \
  --url http://localhost:3000/api/estudante/4 \
  --header 'Content-Type: application/json' \
  --data '{
    "cpf": "98386347932",
    "name": "josésilva",
    "email": "jose@silva.com",
    "id_colegio": 2,
    "id_turma": 5,
    "score": 12
}'
*/

exports.atualizaEstudante = async (req, res, next) => {
  try {
    const { id } = req.params;

    const body = {
      cpf: req.body.cpf,
      name: req.body.name,
      email: req.body.email,
      id_colegio: req.body.id_colegio,
      id_turma: req.body.id_turma,
      score: req.body.score,
    };

    const response = await atualizaEstudante(id, body);

    return res.status(response.status).json(response.json);
  } catch (error) {
    return next(error);
  }
};

/*
Exemplo em curl para apagar um registro de um estudante
curl --request DELETE \
  --url http://localhost:3000/api/estudante/1
*/

exports.apagaEstudante = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await deleteEstudante(id);

    return res.status(response.status).json(response.json);
  } catch (error) {
    return next(error);
  }
};
