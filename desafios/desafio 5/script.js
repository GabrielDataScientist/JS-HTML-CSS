function GerarTabuada(){
    let numero = document.querySelector("input#numero")
    let tab = document.querySelector("select#seltabuada")
    let num = Number(numero.value)
    
    tab.innerHTML = ""
    for (let i = 0; i <= 10; i++){
        
        //Precisa criar uma opção para item do select
        let item = document.createElement("option")
        result = num * i
        item.text = `${num} x ${i} = ${result}`
        tab.appendChild(item)
        
    }
    
}