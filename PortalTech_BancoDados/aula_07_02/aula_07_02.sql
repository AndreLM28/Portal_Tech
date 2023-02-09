CREATE DATABASE aula_07_02;
USE aula_07_02

CREATE TABLE artista (
    artista_id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(20) UNIQUE
);

INSERT INTO  artista (nome)
VALUES
('O Rappa'),
('Nenhum de Nós');

CREATE TABLE musica (
    musica_id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(15) NOT NULL,
    duracao_seg INT NOT NULL
);   


INSERT INTO musica
(nome, duracao_seg)
VALUES
('Se', 180),
('O Homem Amarelo', 180),
('Parabolica', 150),
('Parabolica', 150),
('Contra o Tempo', 265)

-- CRIANDO O RELACIONAMENTO
CREATE TABLE artista_musica(
fk_artista_id INT,
fk_musica_id INT
CONSTRAINT artista_musica_pk PRIMARY KEY (fk_artista_id,fk_musica_id),
CONSTRAINT fk_artista_id FOREIGN KEY (fk_artista_id) REFERENCES artista(artista_id),
CONSTRAINT fk_musica_id FOREIGN KEY (fk_musica_id) REFERENCES musica(musica_id)
)

INSERT INTO artista_musica
VALUES
(1,3),
(2,4),
(4,5),
(3,6),
(5,8)
