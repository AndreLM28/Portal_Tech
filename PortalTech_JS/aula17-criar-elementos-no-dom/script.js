const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal.Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
  {
    titulo: "TESTE NOVO INDICE",
    subtitulo: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    data: "01/01/23",
    texto: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  },

]



//criando o elemento
const article = document.createElement('article')

//alterando o id
article.className = 'class-2'
article.innerHTML = `
<h3>Make Hommus. Not War</h3>
<p class="subtitulo">teste teste !</p>
<div class="data">18/08/2022</div>
<p>Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!</p>
`

//populando no HTML
const main = document.querySelector('main')
main.appendChild(article)


//mostrando o id titulo do array no indice 0
console.log(arrayPostagens[0].titulo)
//Criando loop
for (let i=0; i < arrayPostagens.length; i++){
  //criando o elemento
   const novo_article = document.createElement('article')
    //populando novo article atraves do array
    novo_article.innerHTML = `
    <h3>${arrayPostagens[i].titulo}</h3>
    <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
    <div class="data">${arrayPostagens[i].data}</div>
    <p>${arrayPostagens[i].texto}</p>
    `
  //populando no DOM
  const novo_main = document.querySelector('main')
  novo_main.appendChild(novo_article)
}


