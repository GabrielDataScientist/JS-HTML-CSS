/*
    Arrys funcionam com listas no python (que também são arrays(matrizes))
    São indexados, podendo acessar o valor através da posição dentro da matriz
    Pode inserir ou remover itens da matriz utilizando os métodos push() e pop ()
    Eles adicionam/removem o item no final da matriz

    Também pode utilizar o shift() e unshift() que remove e adiciona um elemento
    ao início da lista, respectivamente.

    indexOf(elemento) - encontra o índice do elemento
    lastIndexOf(elemento) - encontra o último índice do elemento

*/
let arr = ['José', 26, 'Gabriel', 1996]

console.log(arr)
console.log(arr[0] + "", arr[2])
console.log(arr.length);
console.log(arr[arr.length - 1]);

//Inserido itens na matriz
arr.push("Programador")

console.log(arr);

//Removendo itens da matriz
arr.pop()

console.log(arr);

//Adicionando no início da lista
arr.unshift("Início")

console.log(arr);

//Removendo início da lista
arr.shift()

console.log(arr);

//Encontrando os índices
let numero = [0,1,2,3,4,5,0,1]

console.log(`Primeira posição do valor 1: ${numero.indexOf(1)}`);
console.log(`Última posição do valor 1: ${numero.lastIndexOf(1)}`);
