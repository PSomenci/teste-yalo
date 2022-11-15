const db = require('../config/database');

exports.findEstudante = async (id) => {
  const retornoBancoDeDados = await db.query(
    `SELECT * FROM estudantes WHERE id = ${id}`,
  );

  if (retornoBancoDeDados.rowCount === 0) {
    const erro = {
      status: 404,
      json: {
        message: 'Não foi encontrado um estudante com o id informado',
      },
    };
    return erro;
  }

  return {
    status: 200,
    json: {
      resultado: retornoBancoDeDados.rows[0],
    },
  };
};
