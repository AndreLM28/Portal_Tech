CREATE FUNCTION total_clientes_dia (@data DATE)
RETURNS INT
AS
BEGIN
    DECLARE @total INT
    SELECT @total = COUNT(*)
    FROM clientes
    WHERE data_cadastro = @data

    RETURN @total
END

-- Essa função irá receber como parâmetro uma data e irá retornar o número total 
-- de clientes cadastrados na loja naquele dia. A função irá contar o número de 
-- linhas na tabela de clientes cuja data de cadastro é igual a data informada 
-- como parâmetro. O resultado da contagem será armazenado na variável @total e 
-- retornado pela função.

