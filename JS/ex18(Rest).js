/*
    O Rest operador é uma forma de criar uma função que aceita n argumentos, se tornando uma matriz(array)
    O parâmetro é definido por: ...parâmetro
*/

let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4
let num5 = 5

const funcaoRest = (...args) => {
    console.log(`Tamanho do argumento: ${args.length}`);
    args.forEach(argumento => {
        console.log(argumento);

    })
}
    
funcaoRest(num1, num2, num3, num4, num5)
console.log("-------------------");
funcaoRest("José", "Gabriel", "Ana", "Paula")