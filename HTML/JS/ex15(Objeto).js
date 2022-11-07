/*
    Objetos são uma coleção de propriedades
    Parecido com matrizes, pode ter seu valor acesso
    A estrutura do objeto é padrão chave:valor
    Aceita funções como valor
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