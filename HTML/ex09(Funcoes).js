function parimpar(n){
    if (n %2 == 0){
        console.log("Par!")
    } else {
        console.log("Ímpar!")
    }
}

parimpar(5)

function escreverNoConsole(){
    console.log("Escrevendo através de uma função")
}

escreverNoConsole();

//Declarando uma função dentro de uma variável
//Função sem nome é chamada de função anônima
const textNoConsole = function(){
    console.log("Função dentro de uma variável");
}

textNoConsole();

const textoPorParametro = function(texto){
    console.log(texto)
}

textoPorParametro("Esse é um exemplo de passagem de parâmetro de uma função!")

//Função com return
function somarNumeros(x, y, z){
    return x + y + z
}

console.log(somarNumeros(1,2,3))

//Passando a função para dentro de uma variável
const soma = somarNumeros(1,2,3)

console.log(`A soma é ${soma}`)

