/*
    Métodos e funções utilizadas para tratar strings

    padStart(qnt_para_incluir, string_que_sera_incluida)
    split(separador) -> separa a frase de acordo com uma condição (vírgula, espaço, letra específica e etc...)
    join(separador) -> Junta as strings
*/

let milAoContrario = "1"

console.log(milAoContrario.padStart(4, "0"));

let frase = "O rato roeu a roupa do rei de Roma"

//Separanado as palavras da frase
console.log(frase.split(" "));

let nova_frase = frase.split(" ")
console.log(nova_frase);

//Juntando
console.log(nova_frase.join(" "));