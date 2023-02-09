-- criando bando de dados
CREATE DATABASE escola;
-- selecionando o banco
USE escola;
-- criando a tabela aluno
CREATE TABLE aluno (
   id INT PRIMARY KEY IDENTITY(1,1),
   nome VARCHAR(50) NOT NULL,
   telefone VARCHAR(15) NOT NULL,
   email VARCHAR(50) NOT NULL,
   endereco VARCHAR(100) NULL
);
-- incluindo coluna
ALTER TABLE aluno  ADD data_inscricao DATE NOT NULL;
-- inserindo dados
INSERT INTO aluno (nome, telefone, email, endereco, data_inscricao)
VALUES 
('João Silva', '(31)987000100', 'joao@email.com', 'Rua A, 123', '2022-01-01'),
('Maria Silva', '(21)987654321', 'maria@email.com', 'Rua B, 456', '2022-05-06'),
('José Silva', '(11)977140023', 'jose@email.com', 'Rua C, 789', '2023-02-06');

INSERT INTO aluno (nome, telefone, email, endereco, data_inscricao)
VALUES 
('André Neto', '(27)984616112', 'andre_n@email.com', 'Rua 15, 05', '2023-02-06'),
('Raimundo Filho', '(85)999510051', 'filhoR@email.com', 'Rua da praça, 75', '2023-02-06');

-- apagando registro da tabela aluno.
DELETE FROM aluno;

-- alterando a tabela aluno adicionando a coluna curso id com FK da tabela curso coluna id
ALTER TABLE aluno
ADD curso_id INT,
FOREIGN KEY (curso_id) REFERENCES curso (id);

-- inserindo dados com id cursos

INSERT INTO aluno (nome, telefone, email, endereco, data_inscricao, curso_id)
VALUES 
('João Silva', '(31)987000100', 'joao@email.com', 'Rua A, 123', '2022-01-01', 1),
('Maria Silva', '(21)987654321', 'maria@email.com', 'Rua B, 456', '2022-03-06', 3),
('José Silva', '(11)977140023', 'jose@email.com', 'Rua C, 789', '2022-10-05', 5),
('André Neto', '(27)984616112', 'andre_n@email.com', 'Rua 15, 05', '2023-02-06', 4),
('Raimundo Filho', '(85)999510051', 'filhoR@email.com', 'Rua da praça, 75', '2023-02-06', 2)



-- criando tabela curso
CREATE TABLE curso (
    id INT IDENTITY(1,1) PRIMARY KEY,
    curso_programacao VARCHAR(100) NOT NULL,
    curso_descricao VARCHAR(500) NOT NULL
);

-- inserindo dados
INSERT INTO curso (curso_programacao, curso_descricao)
VALUES 
    ('Programação em Python', 'Curso para aprender a programar em Python'),
    ('Desenvolvimento Web', 'Curso para aprender a criar aplicativos web'),
    ('Banco de Dados', 'Curso para aprender a gerenciar banco de dados'),
    ('Mobile Development', 'Curso para aprender a desenvolver aplicativos móveis'),
    ('Machine Learning', 'Curso para aprender a aplicar inteligência artificial em projetos');

-- criando a tabela professor
CREATE TABLE professor (
    id INT IDENTITY(1,1) PRIMARY KEY,
    curso_do_professor VARCHAR(100) NOT NULL,
    nome_do_professor VARCHAR(100) NOT NULL
);

-- apagando coluna curso_do_professor
ALTER TABLE professor
DROP COLUMN curso_do_professor;

-- alterando a tabela professor adicionando a coluna curso id com FK da tabela curso
ALTER TABLE professor
ADD curso_id INT,
FOREIGN KEY (curso_id) REFERENCES curso (id);

-- inserindo dados na tabela professor
INSERT INTO professor (nome_do_professor, curso_id)
VALUES 
    ('Jorge Santos', 1),
    ('Sandra Ferreira', 2),
    ('Pedro Souza', 3),
    ('Cesar Matos', 4),
    ('Gisele Trindade', 5);
