/*
    São métodos que vão definir propriedades
*/

class Cachorrao {
    constructor(raca){
        this.raca = raca
    }

    //Pega a variávle
    get verRaca(){
        return `A raça é: ${this.raca}`
    }

    //Define a variável
    set setRaca(raca){
        this.raca = raca
    }
}

let cachorro = new Cachorrao("Labrador")
console.log(cachorro);
console.log(cachorro.verRaca)
cachorro.setRaca = "Pinscher"
console.log(cachorro.verRaca);