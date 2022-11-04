/*
    Recursion é uma propriedade que permite uma função se chamar novamente
    Deve ter cuidado para não chamar a mesma função várias vezes
    Muito utilizada em frameworks modernos
*/

const retornaNumeroPar = (n) => {
    if (n % 2 == 0){
        console.log(`O número digitado é par: ${n}`)
    } else {
        console.log(`O número digitado foi: ${n}`);
        //Recursão - chama a função dentro dela mesma.
        retornaNumeroPar(n - 1)
    }
}

retornaNumeroPar(3)


