/*

    O ECMAScript6, a mais recente versão do JS lançado
    É a versão base de framework moderno (React, Vue e etc)
    Funcionalidades que agilizam a programação

*/

//Declarando variáveis
let a = "Gabriel" //Pode ser alterado
const b = 10 //Constante


//Nas arrow functions, o this é excluído
function soma1(a, b){
    return a + b
}

//Escopo local
const soma2 = function(a, b){
    return a + b
}

const soma3 = (a, b) =>{
    return a + b

}
 
//Outra forma de declarar arrow functions
const soma4 = (a, b) => a + b

console.log(soma1(1, 2));
console.log(soma2(1,2));
console.log(soma3(1, 2));
console.log(soma4(1, 2));

