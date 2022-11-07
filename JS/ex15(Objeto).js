/*
    Objetos são uma coleção de propriedades
    Parecido com matrizes, pode ter seu valor acesso
    A estrutura do objeto é padrão chave:valor
    Aceita funções como valor
    Aceita fusões entre objetos utilizando o método assign
        Object.assign(objeto_principal, objeto_adicional, ...)
    {} = objeto
    [] = matriz
*/

let pessoa = {
    nome:"Gabriel",
    idade: 26,
    cidade: "Belo Horizonte",
    estado: "Minas Gerais"
}

console.log(pessoa)
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);
console.log(pessoa.estado);
console.log("Mostrando apenas as chaves do objeto: ", Object.keys(pessoa));
console.log("Mostrando apenas os valores do objeto: ", Object.values(pessoa));

//objetos aceitam funções
let cachorro = {
    nome: "Thor",
    idade: 3,
    latir: () =>{
        return console.log("au au");
    }
}

console.log(cachorro);
console.log(cachorro.nome);
console.log(cachorro.idade);
cachorro.latir()

//Adicionando e deletando propriedades do objeto
let dev = {
    nome: "Gabriel",
    funcao: "Programador",
    linguagem: "JavaScript",
    especialidade: "Front End",
    especial: () => {
        return console.log("Você ativou meu especial!")
    }
}

console.log(dev)

//deletando uma propriedade
delete dev.nome

console.log(dev);

//adicionando uma propriedade
dev.nome = "Gabriel"

console.log(dev);

dev.especial()

//Fusão entre 2 objetos
let objeto1 = {
    prop1:"propriedade 1",
    prop2:"propriedade 2"
}

let objeto2 = {
    prop3:"propriedade 3"
}

console.log("Antes da fusão: ", objeto1);
Object.assign(objeto1, objeto2)
console.log("Depois da fusão: ", objeto1);


