CREATE DATABASE yalo
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE estudantes (
    id SERIAL PRIMARY KEY,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	id_colegio INTEGER NOT NULL,
	id_turma INTEGER NOT NULL,
	score NUMERIC(3,1)
);

INSERT INTO estudantes (cpf, name, email, id_colegio, id_turma, score) 
	VALUES (
		'93839292000', 
		'Kevin Martin Thiago Rodrigues', 
		'kevin-rodrigues71@cotamtambores.com.br', 
		1, 1, '7');
INSERT INTO estudantes (cpf, name, email, id_colegio, id_turma, score) 
	VALUES (
		'73322431134', 
		'Nicole Patrícia Aragão', 
		'nicolepatriciaaragao@novaequipem.com.br', 
		1, 2, '9');
INSERT INTO estudantes (cpf, name, email, id_colegio, id_turma, score) 
	VALUES (
		'35974146565', 
		'Murilo Kaique Novaes', 
		'murilo_kaique_novaes@teofilorezende.com.br', 
		2, 1, '10');
