CREATE DATABASE yalo
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE colegios
(
    id serial NOT NULL,
    nome character varying(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE turmas
(
    id serial NOT NULL,
    nome character varying NOT NULL,
    fk_colegio integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_colegio FOREIGN KEY (fk_colegio)
        REFERENCES colegios (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE TABLE estudantes
(
    id serial NOT NULL,
    cpf character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    id_colegio integer NOT NULL,
    id_turma integer NOT NULL,
    score numeric(3, 1),
    PRIMARY KEY (id),
    CONSTRAINT id_colegio FOREIGN KEY (id_colegio)
        REFERENCES colegios (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT id_turma FOREIGN KEY (id_turma)
        REFERENCES turmas (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
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
