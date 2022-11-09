/*
    Alguns exercícios para fixação do conteúdo
*/

//Criar uma conta em um banco

class Conta{
    constructor(conta, saldo){
        this.conta = conta
        this.saldo = saldo
    }

    sacar(valor){
        this.saldo -= valor
        if (this.saldo < 0){
            console.log(`Saldo insuficiente!`);
        } else {
            console.log(`Valor sacado: ${valor}`);
            console.log(`Valor restante em conta: ${this.saldo}`);
        }
    }

    depositar(valor){
        this.saldo += valor
        console.log(`Valor depositado: ${valor}`);
        console.log(`Saldo atualizado: ${this.saldo}`);
    }
}

let cliente = new Conta("001", 1000)

// console.log("Cliente número: " + cliente.conta);
// console.log("Meu saldo é: " + cliente.saldo);
// cliente.depositar(1000)
// cliente.sacar(500)

//Carrinho de compras de um e-commerce

class CarrinhoCompra{
    constructor(){
        this.lista = []
        this.total = 0
        this.produtos = {}
        this.produtos_escolhidos = {}
        this.itens()
    }

    itens(){
        this.produtos = {
            "A":100,
            "B": 200,
            "C":300,
            "D":400
        }
        //iterando sobre o objeto produtos
        for (const [key, values] of Object.entries(this.produtos)){
            console.log(`Produto: ${key} - Valor: ${values}`);
        }

    }
    comprar(){
        console.log("Você comprou!");
    }

    cancelar(){
        this.lista = []
        console.log("Você cancelou a operação!");
    }

    adicionar(trem){
        // this.lista.push(trem)
        // console.log(`Você está adicionando um item ao carrinho: ${trem}`);
        // console.log(`Lista de iten(s) adicionados ao carrminho: ${this.lista}`);
        // console.log(`Você tem ${this.lista.length} itens no carrinho`);
        console.log(this.produtos.keys[trem]);

    }

    remover(){
        console.log("Você está removendo um item da lista!");
    }
}

let consumidor = new CarrinhoCompra()
consumidor.adicionar("A")
