/*
    Objetos que herdam característica da classe pai
    Utiliza a propriedade extends para referenciar a classe filho

    Com o método instanceOf podemos saber quem é o pai da classe verificada
*/

class Veiculo{
    constructor(rodas){
        this.rodas = rodas
    }
}

class Carro extends Veiculo{
    constructor(rodas, fabricante){
        //Apontando para a herança da classe pai
        super(rodas, rodas)

        this.fabricante = fabricante
    }
}

class Moto extends Veiculo{

}

let camionete = new Carro(4, "Chevrolet")
console.log(camionete);

console.log(new Moto instanceof Veiculo);