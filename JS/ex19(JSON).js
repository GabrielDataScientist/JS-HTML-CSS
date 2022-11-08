/*
    JSON -> JavaScript Object Notation
    É utilizado para comunicação entre front end e back end, para pegar e receber dados
    É um tipo de dado padronizado, que lembra objeto/dicionário chave:valor
    {
        "chave":"valor"
    }
    Tem que ser em aspas duplas
    Não possui propriedades
    Não aceita comentários
*/

//Criando um JSON
let cadastro = {
    "nome":"Gabriel",
    "profissao":"Programador",
    "idade":26,
    "cidade": "Belo Horizonte",
    "estado":"Minas Gerais",
    "hobbies":["jogar", "beber cachaça", "tocar guitarra"]
}

console.log(cadastro);

//Transfornado em texto
let cadastroTexto = JSON.stringify(cadastro)

console.log(cadastroTexto);

//Transformando para JSON
let cadastroJSON = JSON.parse(cadastroTexto)

console.log(cadastroJSON);

//Acessando os valores
console.log(cadastroJSON.nome);
console.log(cadastroJSON.hobbies[1]);