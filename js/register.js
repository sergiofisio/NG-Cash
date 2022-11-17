const form = document.querySelector('form')
let inputName = document.getElementById('name')
let inputLogin = document.getElementById('login')
let inputPassword = document.getElementById('password')
let inputConfPassword = document.getElementById('conf-password')
const btnRegister = document.querySelector(".register")
const btnClean = document.querySelector(".clean")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    let nome = inputName.value
    let login = inputLogin.value
    let password = inputPassword.value
    let confPassword = inputConfPassword.value
    if (nome.length === 0) {
        inputName.classList.add("error")
        return alert(`Você esqueceu de colocar o seu nome`)
    } else {
        inputName.classList.remove("error")
    }
    if (login.length === 0) {
        inputLogin.classList.add("error")
        return alert(`Você esqueceu de colocar o login`)
    } else if (login.includes(" ")) {
        inputLogin.classList.add("error")
        return alert(`Login não pode conter espaços`)
    } else {
        inputLogin.classList.remove("error")
    }
    if (password.length === 0) {
        inputPassword.classList.add("error")
        return alert(`Você esqueceu de colocar a senha`)
    } else if (password.length < 6) {
        inputPassword.classList.add("error")
        return alert('Sua senha deve ter pelo menos 6 caracteres')
    } else if (password.includes(" ")) {
        inputPassword.classList.add("error")
        return alert('Senha não pode conter espaços')
    } else if (password !== confPassword) {
        inputPassword.classList.add("error")
        inputConfPassword.classList.add("error")
        return alert('Senhas não conferem')
    } else {
        inputPassword.classList.remove("error")
        inputConfPassword.classList.remove("error")
    }

    localStorage.setItem("name", nome)
    localStorage.setItem("login", login)
    localStorage.setItem("senha", password)

    return alert(`Ola ${nome}, seu cadastro foi realizado com sucesso.
    Seu login é ${login} e sua senha é ${password}.
    Lembre-se dela`)
})

btnClean.addEventListener('click', (event) => {
    inputName.value = ""
    inputLogin.value = ""
    inputPassword.value = ""
    inputConfPassword.value = ""
    inputName.classList.remove("error")
    inputLogin.classList.remove("error")
    inputPassword.classList.remove("error")
    inputConfPassword.classList.remove("error")
})