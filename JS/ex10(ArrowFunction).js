/*
    Arrow functions são muito utilizadas em frameworks modernos (React)
    É anônima, e atrelada a uma variável
    As funções de flecha tem o mesmo efeito que as funções "normais"
    Não possui o "this"
*/

let consoleTeste = () => {
    console.log("Olá, mundo!");
}

consoleTeste()

let soma = (x, y) => {
    return x + y
}

console.log(soma(1,2));

const nomePessoa = (nome, sobrenome) => {
    if (nome === undefined || sobrenome === undefined){
        console.log("A passagem de parâmetro é obrigatória!")
    } else {
        console.log(`Olá, ${nome} ${sobrenome}`);
    }

}

nomePessoa("José", "Gabriel")

//Outra forma de declarar uma função de flecha
const multiplicar = x => x * 2

console.log(multiplicar(2))

//Utilizando a biblioteca Math
const numeroAleatorio = (n) =>{
    for (i = 1; i <= n; i ++){
        console.log(Math.random() * 100)
    } //Math.floor(Math.random()) => o floor arredonda os números.
}

numeroAleatorio(5)

//Tamanho de texto - length
const tamanhoTexto = (texto) => {
    if (texto.length > 10){
        console.log("Texto muito longo!");

    } else {
        console.log("Texto dentro do limite");
    }
}

tamanhoTexto("O meu nome é José!")