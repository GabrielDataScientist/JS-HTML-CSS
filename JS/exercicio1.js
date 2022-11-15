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

//----------------------------------------------

//Carrinho de compras de um e-commerce

class CarrinhoCompra{
    constructor(item){
       this.item = item
    }

    get verCarrinho(){
        console.log("Itens do carrinho");
        console.log("----------------");
        console.log(this.item);
    }

    addItem(item_novo){
        this.item.push(item_novo)
    }

    //A ideia é iterar sobre o objeto, procurando o valor do id
    //itemAdd é o iterador. É ele quem vai percorrer todos os parâmetros do objeto
    atualizar_carrinho(id_item, adicionar){
        for (let itemAdd in this.item){
            if (this.item[itemAdd].id == id_item){
                this.item[itemAdd].qnt += adicionar
            }
        }

        console.log(`Você adicionou ${adicionar} item(ns) ao seu carrinho!`);
    }

    valorTotal(){
        let valorCarrinho = 0
        for(let itemCarrinho in this.item){
            valorCarrinho += (this.item[itemCarrinho].preco * this.item[itemCarrinho].qnt)
        } 

        console.log(`O valor total do carrinho é: ${valorCarrinho}`);
    }

    remover_qtd(id_item){
        for (let id_remover in this.item){
            if (this.item[id_remover].id == id_item){
                this.item[id_remover].qnt -= 1
            }
        }

        console.log("Você está removendo um item da lista!");
    }

    deletar_item(item){
        //Primeiro, encontrar o valor do id    
        for (let produtoCarrinho in this.item){
            if (this.item[produtoCarrinho].id == item.id){
                
                //Encontrar o index do id
                //findIndex(elemento, index, array) - index e array são opcionais
                let obj = this.item[produtoCarrinho]
                let index = this.item.findIndex(
                        function(obj) {
                                return obj.id == item.id
                            })
        
                //O método splice() dele um elemento de uma matriz
                //this.item.splice(index, 0)
                console.log(`Você deletou o item: ${this.item[produtoCarrinho].produto} no índice ${this.item[produtoCarrinho].id}`);
                console.log(index);
                this.item.splice(index, 1)
                
            }
        }

        
    }
}

//Criando o objeto
let consumidor = new CarrinhoCompra([
    {
        id:0,
        produto:"Camisa",
        tamanho:"M",
        qnt:2,
        preco:100
    },
    {
        id:1,
        produto:"Calça",
        tamanho:"M",
        qnt:2,
        preco:100
    },
    {
        id:2,
        produto:"Tenis",
        tamanho:"M",
        qnt:1,
        preco:200
    },

])

consumidor.verCarrinho
consumidor.deletar_item({id:1})
consumidor.verCarrinho
consumidor.deletar_item({id:0})
consumidor.verCarrinho