const title = document.getElementsByClassName('title')
const error_text = document.getElementsByClassName('error-text')
const username_input = document.getElementById('login-usuario')
const password_input = document.getElementById('login-senha')



function validateForms(){
    if (username_input.value != 'Andre'){
        error_text[0].classList.add('visible')
    } else {
        error_text[0].classList.remove('visible')
    }
    if (password_input.value != '123'){
        error_text[1].classList.add('visible')
    } else{
        error_text[0].classList.remove('visible')
    }
}


// validateForms()