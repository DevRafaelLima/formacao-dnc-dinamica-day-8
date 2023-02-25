let inputNomeCompleto = document.getElementById('nome_completo')
let inputEmail = document.getElementById('email')
let spanNomeCompleto = document.getElementById('span-nome-completo')
let spanEmail = document.getElementById('span-email')
let spanSuccess = document.getElementById('span-success')
function onSubmit(event) {
    event.preventDefault();
    if (inputNomeCompleto.value === '') {
        spanNomeCompleto.style.display = 'block'
    } else {
        spanNomeCompleto.style.display = 'none'
    }

    if (inputEmail.value === '') {
        spanEmail.style.display = 'block'
    } else {
        spanEmail.style.display = 'none'
    }

    if(inputNomeCompleto.value !== '' && inputEmail.value !== '') {
        spanSuccess.style.display = 'block'
        inputNomeCompleto.value = ''
        inputEmail.value = ''
    } else {
        spanSuccess.style.display = 'none'
    }

    
}