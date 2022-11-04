function Carregar(){
    let msg = window.document.getElementById("msg")
    let imagem = window.document.getElementById("thumb")
    let data = new Date
    //let hora = data.getHours()
    hora = 13
    let minuto = data.getMinutes()

    //msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

    if (hora >= 2 && hora < 12){
        msg.innerHTML= ` Bom dia! Agora são ${hora} horas e ${minuto} minutos`
        imagem.src = "manha.jpg"
        document.body.style.background = "#F2E3D5"
    } else if (hora >= 12 && hora < 18){
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas e ${minuto} minutos`
        imagem.src = "tarde.jpg"
        document.body.style.background = "#F2C12E"
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas e ${minuto} minutos`
        imagem.src = "noite.jpg"
        document.body.style.background = "#012E40"
        
    } 
        
}
