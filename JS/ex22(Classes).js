/*
    No JS, classes nada mais são que os próprios objetos instanciados. Cria um objeto (pai) que será instanciado pelos 
    objetos filho (children)
    *Instanciar = criar um objeto novo

    Porém, a forma mais comum de cosntruir uma classe é através do construtor por função
    function nomeDaFunção(){
        <métodos>
    }

    Pode usar também o método new para instanciar um novo objeto.

    Uma prática de boa codificação é instanciar o método fora da classe utilizando o prototype
*/

//Criando o objeto (classe)
// let carro = {
//     marca: "",
//     modelo: "",
//     rodas: 4,
//     portas: 4,
//     acessorio: ["travas elétricas", "ar condicionado", "sensor de estacionamento"],
//     setMarca: function(marca){
//         this.marca = marca
//     },
//     setModelo: function(modelo){
//         this.modelo = modelo
//     },
// }

// //Instanciando a classe

// let camionete = Object.create(carro)

// camionete.setMarca("Chevrolet")
// camionete.setModelo("S10")

// console.log(camionete.marca)
// console.log(camionete.modelo);


//Criando uma classe através do método construtor de classes
function novoCarro(modelo, fabricante, cor){
    //Já instanciando o objeto filho
    let carro = Object.create({});
    carro.modelo = modelo,
    carro.fabricante = fabricante,
    carro.cor = cor,
    carro.acelerar = function() {
        console.log("Acelerandooo!!");
    }
    return carro

}

//Agora, vamos atribuir valores ao novo carro
let carro1 = novoCarro("S10", "Chevrolet", "Prata")

console.log(carro1);
carro1.acelerar()

//instanciando com o New
function Cachorrao(raca){
    this.raca = raca
}

//Instanciando o método fora da classe utilizando o prototype
Cachorrao.prototype.uivar = function() {
    console.log("Auuuuu");
}

//Como se fosse um Object.create({}) dentro da classe
//Prefiro instanciar com o new do que diretamente dentro da classe
let husky = new Cachorrao("husky")

console.log(husky);
console.log(husky.raca);
husky.uivar()