const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkDados = document.getElementById("link-perfil-dados");
const linkPrincipal = document.getElementById("link-perfil-principal")


document.addEventListener("keyup", (event)=> {
  //=== compara valor e o tipo do dado 
    if(event.key === '1') {
      if(navPerfil.style.display == "block") {
        linkDados.click()
      //console.log(event.key)
       } else {
        navPerfil.style.display = "block"
       }
    }   
}) 
    

document.addEventListener("keyup", (event)=> {
  if(event.key === 'Escape') {
    navPerfil.style.display = "none"
    //console.log(event.code)
   }  
})

document.addEventListener("keyup", (event)=> {
  //  console.log(event.code)
  if(event.code === 'Space'){
    linkPrincipal.click()
  }
})

// linkPerfil.addEventListener("mouseover", ()=> {
//   navPerfil.style.display = "block"
// })
