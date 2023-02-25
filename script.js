let inputNomeCompleto = document.getElementById('nome_completo')
let inputEmail = document.getElementById('email')
let spanNomeCompleto = document.getElementById('span-nome-completo')
let spanEmail = document.getElementById('span-email')
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
}