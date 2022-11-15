/*
    Manipulando objetos de endereço utilizando o set
*/

class meuEndereco{
    constructor(rua, bairro, numero, cidade, estado, cep){
        this.rua = rua
        this.bairro = bairro
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
        this.cep = cep
    }

    get mostrarEndereco(){
        return null
    }

    set novaRua(novaRua){
        this.rua = this.novaRua
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro
    }

    set novoNumero(novoNumero){
        this.numero = novoNumero
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado
    }

    set novoCEP(novoCEP){
        this.cep = novoCEP
    }


}

let endereco = new meuEndereco("D", "X", 1, "Três Marias", "MG", 39205000)
console.log(endereco);
endereco.novoBairro = "Y"
console.log(endereco);
endereco.novaCidade = "Belo Horizonte"
console.log(endereco);