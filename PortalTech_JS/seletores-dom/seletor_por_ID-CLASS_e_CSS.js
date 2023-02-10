console.log("Olá mundo!");

// Acessando a DOM por ID
const titulo = document.getElementById("titulo");
console.log(titulo);

// Acessando a DOM por CLASSE
const textos = document.getElementsByClassName("texto-simples")
console.log(textos);

console.log(textos[0]); // imprimindo o 1º indice do array ver apostila


// Acessando a DOM com seletores CSS
const segundoTitulo = document.querySelector("div h2");
console.log(segundoTitulo);

const textosPorClasse = document.querySelectorAll(".texto-simples");
console.log(textosPorClasse);
