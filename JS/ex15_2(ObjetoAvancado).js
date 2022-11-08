/*
    Desestruturando objetos é a forma de criar objetos e matriz de uma forma mais rápida e dinâmica
    O mesmo vale para arrays
*/


//Constrói um objeto
const objeto1 = {
    prop1: "Propriedade 1",
    prop2: "Propriedade 2",
    prop3: "Propriedade 3"
}

//Aponta o novo objeto para as propriedades do objeto1
const {prop1: fprop1, prop2: fprop2, prop3: fprop3 } = objeto1

console.log(fprop1);

//Criando uma array
let nome = ["José", "Gabriel", "Ana"]

const [nome1, nome2, nome3 ] = nome

console.log(nome1);