//Criando um vetor(lista)
let numero = [0, 1, 2, 3]

console.log(numero)

//Acessando a segunda posição
console.log(numero[1])

//Percorrendo o vetor
for (let i = 0; i <= 3; i++){
    console.log(numero[i])
}

//Criando novas posições
numero[4] = 4

console.log(numero)

//Adicionando um valor na última posição
numero.push(5)

console.log(numero)

//Percorrendo o vetor de forma dinâmica. Length no JS é um atributo e não um método
let tamanho = numero.length

for (i = 0; i <= tamanho; i++){
    console.log(numero[i])
}

//Outra forma de escrever o for
for (i in numero){
    console.log(numero[i])
}
//Ordenando. Já o sort é um método, necessitando dos parênteses
let numero2 = [3,5,2,0,1,4]
console.log(numero2.sort())