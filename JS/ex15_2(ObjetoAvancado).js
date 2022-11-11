/*
    Desestruturando objetos é a forma de criar objetos e matriz de uma forma mais rápida e dinâmica
    O mesmo vale para arrays

    O objeto é indexado, onde cada elemento possui um índice específico, podendo ser acessado, adicionado e deletado
    dinâmicamente
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

//Os objetos tem índices, cada chave do objeto representa um índice
//Se retornar -1 é porque não existe no array
console.log(nome.indexOf("José"));
console.log(nome.indexOf("Gabriel"));
console.log(nome.indexOf("Ana"));
console.log(nome.indexOf("teste"));
console.log("-------------------");
//Para criar um objeto de vários índices, utilize o ([{}])
const objeto2 = ([
    {
        id:1,
        cliente: "José"
    },
    {
        id:2,
        cliente: "Gabriel"
    },
    {
        id:3,
        cliente: "Pedro"
    },
    {
        id:4,
        cliente: "Ana"
    }])


//iterando sobre os objetos
//A variável item é o iterador, que passará por cada elemento dentro do objeto objeto2.
//objeto2[item].propriedade acessará as propriedades c
for (let item in objeto2){
    console.log(`Valor do id: ${objeto2[item].id} - Valor do Cliente: ${objeto2[item].cliente}`);

}

