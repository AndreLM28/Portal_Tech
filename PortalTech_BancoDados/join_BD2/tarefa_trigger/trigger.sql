CREATE DATABASE Loja;

USE Loja;

CREATE TABLE Produtos (
    id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(50) NOT NULL,
    preco DECIMAL(18,2) NOT NULL,
    quantidade INT NOT NULL
);

CREATE TABLE Vendedor (
    id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Cliente (
    id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

CREATE TABLE Vendas (
    id INT PRIMARY KEY IDENTITY(1,1),
    id_produto INT NOT NULL,
    id_vendedor INT NOT NULL,
    id_cliente INT NOT NULL,
    data_venda DATE NOT NULL,
    FOREIGN KEY (id_produto) REFERENCES Produtos(id),
    FOREIGN KEY (id_vendedor) REFERENCES Vendedor(id),
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id)
);

-- Inserindo dados na tabela Produtos
INSERT INTO Produtos (nome, preco, quantidade)
VALUES ('Notebook ', 2500.00, 10),
       ('Smartphone ', 1500.00, 20),
       ('Tablet ', 1800.00, 15);

-- Inserindo dados na tabela Vendedor
INSERT INTO Vendedor (nome)
VALUES ('João Silva'),
       ('Maria Santos'),
       ('Pedro Albuquerque');

-- Inserindo dados na tabela Cliente
INSERT INTO Cliente (nome, endereco, telefone)
VALUES ('Ana Paula', 'Rua das Flores, 123', '11 99999-9999'),
       ('Carlos Henrique', 'Avenida das Árvores, 456', '11 88888-8888'),
       ('Eduardo Silva', 'Rua dos Pássaros, 789', '11 77777-7777');

-- Inserindo dados na tabela Vendas
INSERT INTO Vendas (id_produto, id_vendedor, id_cliente, data_venda)
VALUES (1, 1, 1, '2022-01-01'),
       (2, 2, 2, '2022-02-01'),
       (3, 3, 3, '2022-03-01');


--TRIGGER ATUALIZA ESTOQUE
CREATE TRIGGER tr_atualiza_estoque
ON Vendas
AFTER INSERT
AS
BEGIN
  SET NOCOUNT ON;
  DECLARE @id_produto INT, @quantidade INT;

  SELECT @id_produto = id_produto, @quantidade = quantidade, @id_vendedor = id_vendedor
  FROM inserted;

  UPDATE Produtos
  SET quantidade = quantidade - @quantidade
  WHERE id = @id_produto;
END


-- Inserindo dados na tabela Vendas
INSERT INTO Vendas (id_produto, quantidade, data_venda, id_vendedor)
VALUES (1, 10, GETDATE(), 1);
