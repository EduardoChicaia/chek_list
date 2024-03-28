
const abrircaixaCadastro = () => document.getElementById ('caixaCadastro')
.classList.add('ative')

const fechocaixaCadastro = () => {
    clearFields()
    document.getElementById('caixaCadastro').classList.remove('active')
}

document.getElementById('CadaMoto')
    .addEventListener('click', abrircaixaCadastro)

document.getElementById('fechocaixaCadastro')
    .addEventListener('click', fechocaixaCadastro)