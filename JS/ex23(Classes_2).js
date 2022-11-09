/*
    O ES6 pode criar uma classe com o construtor já imbutido utilizando o Class
    É a forma mais comum de se criar classes no JS e mais moderna também
    Nem todos navegaores aceitam esses novos construtores, portanto acesse o site
    https://caniuse.com/ para saber se o navegador utilizado aceita os métodos

    O Class não aceita criar novas propriedade sem passar o parâmetro prototype
    Class.prototype.property = value
*/

class Carro{
    //Propriedades
    constructor(cor, marca, modelo){
        this.cor = cor,
        this.marca = marca,
        this.modelo = modelo
    }

    //métodos
    acelerar(){
        console.log("vruuumm");
    }
}

let camionete = new Carro("Prata", "Chevrolet", "S10")

console.log(camionete);

//Criando uma nova propriedade
Carro.prototype.frear = "urrrhhhhh"

console.log(camionete.frear);

//Override da propriedade cor. Pode ser definida como valor padrão caso não passe nenhum parâmetro
Carro.prototype.cor = "Preto"

console.log(camionete.cor);
console.log(Carro.prototype.cor = "preto");