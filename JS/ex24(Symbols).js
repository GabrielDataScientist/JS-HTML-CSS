/*
    Os symbols são utilizados para definir valor padrão para uma propriedade da Classe
    Esse valor não pode ser duplicado nem sobrescrito e só é acessado via prototype
*/

class Carro{
    constructor (cor, modelo){
        this.cor = cor,
        this.modelo = modelo
    }

    acelerar(){
        console.log("Vruummm");
    }
}

//Criando um symbol
let rodas = Symbol()

//Definindo o rodas dentro da classe
Carro.prototype[rodas] = 4

console.log(Carro.prototype[rodas]);

