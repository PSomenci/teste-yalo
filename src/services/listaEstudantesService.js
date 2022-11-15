/* eslint-disable max-len */
const db = require('../config/database');

exports.listaEstudantes = async (idColegio, idTurma, score) => {
  let sql = 'SELECT * FROM estudantes';

  const where = [];

  if (idColegio) {
    where.push(` id_colegio = '${idColegio}'`);
  }
  if (idTurma) {
    where.push(` id_turma = '${idTurma}'`);
  }
  if (score) {
    where.push(` score = ${score}`);
  }

  if (where.length === 1) {
    sql += ` WHERE ${where[0]}`;
  } else {
    sql += ' WHERE';
    where.forEach((condicoes, index) => {
      if (index < (where.length - 1)) {
        sql += condicoes;
        sql += ' and';
      } else {
        sql += condicoes;
      }
    });
  }

  const retornoBancoDeDados = await db.query(
    sql,
  );

  return {
    status: 200,
    json: {
      total: retornoBancoDeDados.rows.length,
      resultados: retornoBancoDeDados.rows,
    },
  };
};
