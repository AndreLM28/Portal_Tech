-- CREATE PROCEDUTE
CREATE PROCEDURE diario_produtosVendidos (@data DATE)
AS
BEGIN
  SELECT 
    data, 
    SUM(quantidade) AS quantidade_vendida
  FROM 
    vendas
  WHERE 
    data = @data
  GROUP BY 
    data
  END



-- executando
EXEC diario_produtosVendidos '2023-02-06'