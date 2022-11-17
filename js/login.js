const form = document.querySelector('form')
const inputLogin = document.querySelector('#login')
const inputPassword = document.querySelector('#password')
const btnLogin = document.querySelector('.register')


form.addEventListener("submit", (event) => {
    event.preventDefault()
    let login = localStorage.getItem('login')
    let password = localStorage.getItem('senha')
    let loginDigitado = inputLogin.value
    let passwordDigitado = inputPassword.value
    if (loginDigitado.length === 0) {
        inputLogin.classList.add("error")
        return alert('Digite seu Login')
    } else {
        inputLogin.classList.remove("error")
    }
    if (passwordDigitado.length === 0) {
        inputPassword.classList.add("error")
        return alert('Digite sua senha')
    } else {
        inputPassword.classList.remove("error")
    }
    if (loginDigitado !== login || passwordDigitado !== password) {
        return alert('Login e/ou Senha digitados incorretamente')
    }
    window.location.href = '../home/index.html'
})

console.log(login);
console.log(password);