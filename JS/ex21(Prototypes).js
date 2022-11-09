/*
    Prototypes são objetos dos objetos.
    Funciona como uma herança. O prototype é pai do objeto que é referenciado
*/

const pessoa = {
    mao:2,
}

console.log(pessoa);
//Instancionado o objeto
console.log(Object.getPrototypeOf(pessoa));

console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty("mao"));

//Herança prototype
const pessoaNova = Object.create(pessoa)
console.log(pessoaNova.mao);

console.log(Object.getPrototypeOf(pessoaNova) == pessoa);