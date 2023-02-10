// CreateElement
let elementojavascript = document.createElement("li");

elementojavascript.innerText = "JAVASCRIPT" // usando a propriedade innerText 
elementojavascript.id = "ling-js" // usando a propriedade ID 


// appendChild
let listalinguagem = document.querySelector(".lista-linguagens");
listalinguagem.appendChild(elementojavascript);

// CreateElement

const postagemjavascript = document.createElement("div");

elementojavascript.innerHTML = `<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">JavaScript é uma linguagem de programação
</p>` // usando a propriedade innerHTML 

// appendChild
const postagens = document.querySelector(".postagens");

postagens.appendChild(postagemjavascript);