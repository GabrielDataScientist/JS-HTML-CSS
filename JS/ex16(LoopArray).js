/*
    Loop em matrizes é eficiente para percorrer todos os valores dentro da matriz
    especialmente quando é muito grande
*/

let arr = [1,2,3,4,"José", 27, "Gabriel", 911, 113]

console.log("Tamanho da matriz: ", arr.length);
for (i=1; i <= arr.length; i++){
    console.log(arr[i]);
}