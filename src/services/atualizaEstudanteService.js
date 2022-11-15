const db = require('../config/database');
const { normalizaCpf } = require('./createEstudanteService');
const { findEstudante } = require('./findEstudanteService');

exports.atualizaEstudante = async (id, dados) => {
  const verificaEstudante = await findEstudante(id);

  if (verificaEstudante.status === 404) {
    const erro = {
      status: 404,
      json: {
        message: 'Não foi encontrado um estudante com o id informado',
      },
    };
    return erro;
  }

  let sqlUpdate = 'UPDATE estudantes SET';

  const where = [];

  if (dados.cpf) {
    const cpfNormalizado = await normalizaCpf(dados.cpf);
    where.push(` cpf = '${cpfNormalizado}'`);
  }
  if (dados.name) {
    where.push(` name = '${dados.name}'`);
  }
  if (dados.email) {
    where.push(` email = '${dados.email}'`);
  }
  if (dados.id_colegio) {
    where.push(` id_colegio = '${dados.id_colegio}'`);
  }
  if (dados.id_turma) {
    where.push(` id_turma = '${dados.id_turma}'`);
  }
  if (dados.score) {
    where.push(` score = '${dados.score}'`);
  }

  if (where.length === 1) {
    sqlUpdate += where[0];
  } else {
    where.forEach((condicoes, index) => {
      if (index < (where.length - 1)) {
        sqlUpdate += condicoes;
        sqlUpdate += ' ,';
      } else {
        sqlUpdate += condicoes;
      }
    });
  }

  sqlUpdate += ` where id = ${id}`;

  await db.query(sqlUpdate);

  const verificaAtualizacaoEstudante = await findEstudante(id);

  return {
    status: 200,
    json: {
      message: `Informações do estudante ${id} atualizadas com sucesso`,
      response: verificaAtualizacaoEstudante.json.resultado,
    },
  };
};
