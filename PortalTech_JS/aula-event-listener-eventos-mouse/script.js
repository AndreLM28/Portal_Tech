const quantidadeSubtotal = document.getElementById("quantidade-subtotal");
const valorSubtotal = document.getElementById("valor-subtotal");
// CAPTURANDO BTN ADD PRODUTO
const addProduto = document.getElementById("btn-adicionar-produto-01")
// CAPTURANDO BTN SUB PRODUTO
const subProduto = document.getElementById("btn-subtrair-produto-01")
// CAPTURANDO INPUT PRODUTO
const quantProduto = document.getElementById("quantidade-produto-01")


let subtotalInfo = { 
  valor: 11.66,
};

// funcao com parametros()
function calculoValorTotal(quantProduto) {
  subtotalInfo.valor 
  valorSubtotal.innerText = (subtotalInfo.valor * quantProduto).toFixed(2); // toFixed define as casas decimais
}
 

// evento acao + funcao no botao
addProduto.addEventListener('click', adicionarProduto)
subProduto.addEventListener('click', subtrairProduto)

function adicionarProduto() {
  if (quantProduto.value < 15){
    quantProduto.value = Number(quantProduto.value) + 1 // alterar o tipo da variavel para number
    updatesubTotalText()
  }
}

function subtrairProduto() {
  if (quantProduto.value >= 1){
    quantProduto.value = Number(quantProduto.value) - 1
    updatesubTotalText()
  }
}


function updatesubTotalText(){
  // if (quantProduto.value == 1){
  //   quantidadeSubtotal.innerText = quantProduto.value + " iten";
  // } else{
  // quantidadeSubtotal.innerText = quantProduto.value + " itens";
  // }
// condicional mais simples
  quantidadeSubtotal.innerText = quantProduto.value == 1? `${quantProduto.value} item` : `${quantProduto.value} items` 
  calculoValorTotal(quantProduto.value)
}

