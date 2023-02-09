USE escola;
SELECT * FROM professor;
SELECT * FROM curso;
SELECT * FROM aluno;


SELECT professor.nome_do_professor, curso.curso_programacao, curso.curso_descricao
FROM professor
INNER JOIN curso ON professor.curso_id = curso.id;

SELECT aluno.nome, aluno.data_inscricao, curso.curso_programacao, curso.curso_descricao
FROM aluno
INNER JOIN curso ON aluno.curso_id = curso.id;