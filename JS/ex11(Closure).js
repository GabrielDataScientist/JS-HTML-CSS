/*
    Closure são função que retornam outras funções
*/

//Primeira função
function armazenarSoma(x){
    //Segunda função
    return y => x + y
}

/*
    A variável soma1 recebe a função armazenarSoma, que é passado o valor 2 como parâmetro e é armazenado no x da função.
    Após isso, a variável soma1 ainda fica com um argumento pendente, que é o valor y da função.
    O valor y também é passado por referência recebendo o valor 3 => soma1(3).
    E então o valor de x e y são somados e retornados.
*/
let soma1 = armazenarSoma(2)
console.log(soma1(3))

//Pode também utilizar a closure com funções de flecha
const nomeSobrenome = (nome) => {
    return sobrenome => `Meu nome é: ${nome} ${sobrenome}`
}

const meuNome = nomeSobrenome("José")
console.log(meuNome("Gabriel"))

const armazenaNumeros = (x) => {
    return function(y){
        return x + y
    }
}

let num = armazenaNumeros(2)
console.log(num(10));