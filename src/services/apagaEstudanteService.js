const db = require('../config/database');
const { findEstudante } = require('./findEstudanteService');

exports.deleteEstudante = async (id) => {
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

  const sqlDelete = `DELETE FROM estudantes WHERE id = ${id}`;

  await db.query(sqlDelete);

  return {
    status: 200,
    json: {
      message: 'Registro apagado com sucesso',
    },
  };
};
