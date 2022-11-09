/*
    Orientação a Objeto (POO) é um paradigma de programação voltado para manipultar objetos.
    Tem ações, que são definidas por seus métodos
    Um objeto pode conter várias funções
*/

//Declarando uma variável que contém várias funções, se tornando um objeto
let cachorro =  {
    latir: function() {
        console.log("au au au");
    },
    morder: function(){
        console.log("Te mordeu haha");
    },
    cacar: function(){
        console.log("O cachorro está caçando!");
    }
}

cachorro.cacar()

let cao = {
    raca: "undefined",
    latir: function(){
        console.log("au au au");
    },
    cacar: function(){
        console.log("O cão está caçando!");
    },
    //Função padrão para definir algo
    setRaca: function(raca){
        this.raca = raca
    },
    //Função padrão para retornar algo
    getRaca: function(){
        return `A raça é ${this.raca}`
    }
}

console.log(cao.getRaca());
cao.setRaca("Pitbull")
console.log(cao.getRaca());