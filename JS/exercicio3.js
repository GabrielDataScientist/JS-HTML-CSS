/*
    Simulando uma conta bancária
*/

class contaBancaria{
    constructor(numeroConta, saldo, poupanca){
        this.numeroConta = numeroConta
        this.saldo = saldo
        this.poupanca = poupanca
    }

    get verConta(){
        console.log("-------------------------");
        console.log(`Conta número: ${this.numeroConta} com saldo de R$${this.saldo} reais`);
        console.log(`Seu saldo na conta poupança é: R$${this.poupanca}`);
        console.log("-------------------------");
    }

    adicionarDinheiro(dinheiro){
        this.saldo += dinheiro
        console.log(`Você depositou R$${dinheiro}`);
        console.log(`Seu saldo é: R$${this.saldo}`);
        
    }

    sacarDinheiro(dinheiro){
        if (this.saldo < dinheiro){
            console.log("Saldo insuficiente");
            console.log(`Seu saldo é ${this.saldo}`);
        } else {
            this.saldo -= dinheiro
            console.log(`Você sacou R$${dinheiro} reais`);
            console.log(`Seu saldo é: R$${this.saldo} `);
        }
        
    }

    depositarDinheiroPoupanca(dinheiro){
        this.poupanca += dinheiro
        console.log(`Você adicionou R$${dinheiro} reais na poupança`);
        console.log(`Seu saldo na conta poupança é: R$${this.poupanca}`);
    }

    sacarDinheiroPoupanca(dinheiro){
        this.poupanca -= dinheiro
        this.saldo += dinheiro
        console.log(`Você sacou R$${dinheiro} reais na poupança`);
        console.log(`Seu saldo na conta poupança é: R$${this.poupanca}`);
        console.log(`Seu saldo na conta corrente é: R$${this.saldo}`);
    }

    jurosPoupanca(){
        this.poupanca *= 1.05
        console.log(`Rendeu juros de 0.05%.`);
        console.log(`Seu saldo na poupança é: R$${this.poupanca}`);
    }
}

//Conta especial que herda as propriedades da classe principal
//Nessa conta o retorno de juros da poupança é maior
class contaEspecial extends contaBancaria{
    constructor(numeroConta, saldo, poupanca){
        super(numeroConta, saldo, poupanca)
    }

    jurosPoupanca(dinheiro){
        this.poupanca *=1.5
    }
}

//Instanciando um novo cliente
let cliente = new contaBancaria(1, 1000, 500)
cliente.verConta
cliente.adicionarDinheiro(1000)
cliente.sacarDinheiro(300)
cliente.verConta
cliente.sacarDinheiroPoupanca(250)
cliente.verConta
cliente.jurosPoupanca()
cliente.jurosPoupanca()
cliente.jurosPoupanca()

//Instanciando um cliente especial
let clienteEspecial = new contaEspecial(2, 5000, 10000)
clienteEspecial.verConta
clienteEspecial.jurosPoupanca()
clienteEspecial.verConta