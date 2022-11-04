let num = 1
let num2 = 1

//While
while (num < 6) {
    console.log(`Número ${num}`)
    if (num == 4){
        console.log("Opa, é o número 4")
    }
    num++
}

//Do - while
do {
    console.log(`Número ${num2}`)
    num2++
} while (num2 < 6)


//for (inicio; teste; incremento){}
for (let num3 = 1; num3 <= 10; num3++){
    console.log(num3)
}