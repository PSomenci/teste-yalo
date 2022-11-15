/* eslint-disable no-return-await */
/* eslint-disable arrow-body-style */
const db = require('../config/database');

exports.verificaEstudanteCpf = async (cpf) => {
  return await db.query(
    `SELECT * FROM estudantes WHERE cpf = '${cpf}'`,
  );
};

exports.normalizaCpf = async (cpf) => {
  return cpf.replaceAll('.', '').replaceAll('-', '');
};

exports.criaEstudante = async (estudante) => {
  const cpfNormalizado = await this.normalizaCpf(estudante.cpf);
  const verificaCpfBanco = await this.verificaEstudanteCpf(cpfNormalizado);

  if (verificaCpfBanco.rowCount > 0) {
    const erro = {
      status: 403,
      json: {
        message: 'Já existe um estudante cadastrado com esse CPF',
      },
    };
    return erro;
  }

  await db.query(
    'INSERT INTO estudantes (cpf, name, email, id_colegio, id_turma, score) VALUES ($1, $2, $3, $4, $5, $6)',
    [cpfNormalizado,
      estudante.name,
      estudante.email,
      estudante.id_colegio,
      estudante.id_turma,
      estudante.score],
  );

  return {
    status: 201,
    json: {
      message: 'Estudante cadastrado com sucesso',
      retorno: {
        cpf: cpfNormalizado,
        name: estudante.name,
        email: estudante.email,
        id_colegio: estudante.id_colegio,
        id_turma: estudante.id_turma,
        score: estudante.score,
      },
    },
  };
};
