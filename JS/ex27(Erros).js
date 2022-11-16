/*
    Exceptions são mensagens de erros que o desenvolvedor pode criar
    throw new Error("mensagem de erro")

*/

let a = 2

if (a == 1){
    throw new Error("O valor não pode ser 1.")
}

/*
    Try Catch Finally é um bloco que tenta executar um código e, caso não consiga, retorna um erro.
*/

let b = 2
let c = 3

try{ //tenta
    let result = b + d
} catch(error){ //se der erro
    console.log("Algo deu errado! -> " + error);
} finally{ //se funfar
    console.log("Deu certo!");
}