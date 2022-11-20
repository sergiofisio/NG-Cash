const btnDown = document.querySelectorAll('.down>button')
const divExtract = document.querySelector('#info-extract')
const divTransfer = document.querySelector('.transfer')
const form = document.querySelector('form')
const inputLogin = document.querySelector('#login')
const inputValue = document.querySelector('#value')
const inputCheck = document.querySelector('#checkbox')

// console.log(form);

btnDown.forEach((button) => {
    button.addEventListener('click', () => {
        divExtract.classList.toggle('displayNone')
        divTransfer.classList.toggle('displayNone')
    })
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let login = inputLogin.value
    let valor = Number(inputValue.value).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    let checkBox = inputCheck.checked
    if (inputLogin.value.length < 6) {
        return alert('Login do usuário que você quer enviar dinheiro está errado. Verifique e faça novamente. Deve ter pelo menos 6 caractéres')
    }
    if (valor <= 0) {
        return alert(`Valor não pode ser menor ou igual a 0 (zero)`)
    }
    if (!checkBox) {
        return alert('Marque a opção de confirmação')
    }

    inputLogin.value = ''
    inputValue.value = ''
    inputCheck.checked = false
    return alert(`Sua transferecia de ${valor} para ${login} foi realizada com sucesso.`)
})
