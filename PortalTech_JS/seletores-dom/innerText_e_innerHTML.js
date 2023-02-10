// Acessando a propriedade innerText
let elementoh1 = document.querySelector('h1');
console.log(elementoh1);
console.log(elementoh1.innerText);

//Manipulando o DOM com innerText
let elementoNOVOh1 = document.querySelector('h1');
elementoNOVOh1.innerText = "Novo TÍTULO COM JS"

// Acessando a propriedade innerText e innerHTML
let elementoMain = document.querySelector('main');
console.log(elementoMain);
console.log(elementoMain.innerHTML);
console.log(elementoMain.innerText);


//Manipulando o DOM com innerHTML
 elementoMain.innerHTML = `
<h2>Novo SUBTÍTULO</h2>
<ul>
    <li>Elemento lista JS-1</li>
    <li>Elemento lista JS-2</li>
    <li>Elemento lista JS-3</li>
</ul>  
` // abrir e fechar com crase