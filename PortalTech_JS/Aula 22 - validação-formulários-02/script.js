// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

function limparStyle(input, helper) {
helper.classList.remove("visible");
input.classList.remove("error");
input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let userValor = e.target.value

  // if(valor.length >= 3){
  //   // Adicionar estilos dinâmicos se o valor estiver correto
  //   estilizarInputCorreto(usernameInput, usernameHelper);
  //   inputsCorretos.username = true;
  // } else {
  //   // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
  //   usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
  //   estilizarInputIncorreto(usernameInput, usernameHelper)
  //   inputsCorretos.username = false;
  // } 

  
  if(userValor == ""){
    // Limpar os inputs quando vazio
    limparStyle(usernameInput, usernameHelper); 
  } else if(userValor.length >= 3){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameInput);
    inputsCorretos.username = true;
  } else {
   // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
   usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
   estilizarInputIncorreto(usernameInput, usernameHelper)
    inputsCorretos.username = false;
  } 
})



// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)


// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let emailValor = e.target.value

    // if(emailValor.includes("@") && valor.includes(".com")){
  //   // Adicionar estilos dinâmicos se o valor estiver correto
  //   estilizarInputCorreto(emailInput, emailHelper);
  //   inputsCorretos.email = true;
  // } else {
  //   // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
  //   emailHelper.innerText = "Precisa inserir um email válido";
  //   estilizarInputIncorreto(emailInput, emailHelper);
  //   inputsCorretos.email = false;
  // }



    if(emailValor == ""){
      // Limpar os inputs quando vazio
      limparStyle(emailInput, emailHelper); 
    }else if(emailValor.includes("@") && emailValor.includes(".com")){
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(emailInput, emailHelper);
      inputsCorretos.email = true;
    } else {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      emailHelper.innerText = "Precisa inserir um email válido";
      estilizarInputIncorreto(emailInput, emailHelper);
      inputsCorretos.email = false;
    }


})

// ---------- VALIDAÇÃO SENHA ---------- //

const senhaInput = document.getElementById('senha');
const senhaLabel = document.getElementById('label[for="senha"]');
const senhaHelper = document.getElementById('senha-helper');

senhaInput.addEventListener('blur', (e) =>{
  const senhaValue = e.target.value
  
  if (senhaValue){
      estilizarInputCorreto(senhaInput, senhaHelper);
      inputsCorretos.senha = true;
  } else {
    estilizarInputIncorreto(senhaInput, senhaHelper);
    senhaHelper.innerText = 'A senha é obrigatória'
    inputsCorretos.senha = false;
  }
 


})  




//---------- VALIDAÇÃO CONFIRMACAO SENHA ---------- //

const confirmaInput = document.getElementById('confirma-senha');
const confirmaLabel = document.getElementById('label[for="confirma-senha"]');
const confirmaHelper = document.getElementById('confirma-senha-helper');

confirmaInput.addEventListener('blur', (e) =>{
  const confirmaValue = e.target.value
  
  // if (confirmaValue === senhaInput.value){
  //     estilizarInputCorreto(confirmaInput, confirmaHelper);
  //     inputsCorretos.confirmaSenha = true;
  // } else {
  //     estilizarInputIncorreto(confirmaInput, confirmaHelper);
  //     confirmaHelper.innerText = 'As senhas devem ser iguais'
  //     inputsCorretos.confirmaSenha = false;
  // }

 

 if (confirmaValue == ""){
  // Limpar os inputs quando vazio
  limparStyle(confirmaInput, confirmaHelper); 
  } else if (confirmaValue === senhaInput.value && confirmaValue != ""){
  estilizarInputCorreto(confirmaInput, confirmaHelper);
  inputsCorretos.confirmaSenha = true;
  } else if (confirmaValue != senhaInput.value ){
  estilizarInputIncorreto(confirmaInput, confirmaHelper);
  confirmaHelper.innerText = 'As senhas devem ser iguais'
  inputsCorretos.confirmaSenha = false;
  }
})  


// ---------- HABILITAR SUBMIT ---------- //
const submitButton = document.getElementById('submit');

const inputsCorretos = {
  username: false,
  email: false,
  senha:false,
  confirmaSenha: false

}

submitButton.addEventListener('click', (e) =>{
e.preventDefault()
// console.log('OI')

  const valores = Object.values(inputsCorretos);

  console.log('array original', valores);

  const anyFalse = valores.filter((value) => value === false);

  console.log('array filtrado', anyFalse);

  

  
  if(!anyFalse.length){
    alert('Formulário enviado com sucesso!');
    location.reload();
  } else {
    alert('Preencha todos os campos');
  }
  
  
})



