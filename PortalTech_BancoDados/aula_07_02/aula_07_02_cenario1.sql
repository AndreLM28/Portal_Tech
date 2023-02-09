CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE Livros (
    LivroId INT PRIMARY KEY,
    Titulo VARCHAR(100),
    Autor VARCHAR(100),
    Quantidade INT
);

INSERT INTO Livros (LivroId, Titulo, Autor, Quantidade) 
VALUES 
(1, 'O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 2),
(2, '1984', 'George Orwell', 3),
(3, 'Guerra e Paz', 'Leo Tolstoy', 1),
(4, 'Orgulho e Preconceito', 'Jane Austen', 4),
(5, 'The Great Gatsby', 'F. Scott Fitzgerald',3)

CREATE TABLE Clientes (
    RG VARCHAR(20) PRIMARY KEY,
    NomeCompleto VARCHAR(100),
    Telefone VARCHAR(20)
);

INSERT INTO Clientes (RG, NomeCompleto, Telefone) VALUES
('123456789', 'João Silva', '11999999999'),
('234567890', 'Maria Oliveira', '11988888888'),
('345678901', 'Pedro Santos', '11977777777'),
('456789012', 'Ana Lopes', '11966666666');


CREATE TABLE EmprestimoLivros (
  emprestimo_id INT PRIMARY KEY IDENTITY(1,1),
  livro_id INT,
  cliente_rg VARCHAR(20),
  data_emprestimo DATE,
  data_devolucao DATE,
  tempo_atraso INT,
  valor_multa DECIMAL(10,2),
  FOREIGN KEY (livro_id) REFERENCES Livros(LivroId),
  FOREIGN KEY (cliente_rg) REFERENCES Clientes(rg)
);

INSERT INTO EmprestimoLivros (livro_id, cliente_rg, data_emprestimo, data_devolucao, tempo_atraso, valor_multa)
VALUES ( 1, '123456789', '2022-12-01', '2022-12-15', 0, 0.0);

INSERT INTO EmprestimoLivros (livro_id, cliente_rg, data_emprestimo, data_devolucao, tempo_atraso, valor_multa)
VALUES (2, '234567890', '2022-11-01', '2022-11-10', 0, 0.0);

INSERT INTO EmprestimoLivros (livro_id, cliente_rg, data_emprestimo, data_devolucao, tempo_atraso, valor_multa)
VALUES (3, '456789012', '2022-10-01', '2022-10-25', 5, 10.0);

