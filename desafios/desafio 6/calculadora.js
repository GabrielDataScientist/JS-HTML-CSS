//Coletando os objetos do html
let n1 = document.querySelector("#numero1")
let n2 = document.querySelector("#numero2")
let texto = document.getElementById("result")
let resultado = 0

//Criando as funções
const Somar = () => {
    resultado = Number(n1.value) + Number(n2.value)
    texto.innerHTML = `A soma é: ${resultado}`
}

const Subtrair = () => {
    resultado = Number(n1.value) - Number(n2.value)
    texto.innerHTML = `A soma é: ${resultado}`
}

const Dividir = () => {
    resultado = Number(n1.value) / Number(n2.value)
    texto.innerHTML = `A soma é: ${resultado}`
}

const Multiplicar = () => {
    resultado = Number(n1.value) * Number(n2.value)
    texto.innerHTML = `A soma é: ${resultado}`
}