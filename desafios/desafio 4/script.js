function Verificar(){

    //Coletando as tag de várias formas distintas
    let resultado = window.document.querySelector("div#resultado")
    let local_imagem = document.querySelector("div#local_imagem")
    let idade = window.document.getElementById("ano_nascimento")
    let data = new Date()
    let ano = data.getFullYear()
    let idade_anos = ano - idade.value

    //Verifica se o usuário deixou em branco ou digitou zero
    if (idade.value == 0 || idade.value == null ){
        window.alert("Caixa da idade não pode ser nulo ou vazio!")
    } else{

        let genero = ""
        let esc_genero = window.document.getElementsByName("radsex")

        //Construindo a tag img diretamente no JS
        let img = document.createElement("img")
        
        //Equivalente: <img id="foto">
        img.setAttribute("id", "foto")

        //Genero
        if (esc_genero[0].checked){
            genero = "Masculino"
            if (idade.value >= 0 && idade.value <= 17){
                img.setAttribute("src", "boy.png")
                } else if (idade.value >= 18 && idade.value < 60){
                    img.setAttribute("src", "man.png")
                } else {
                    img.setAttribute("src", "old_man.png")
            }

        } else if (esc_genero[1].checked){
            genero = "Feminino"
            if (idade.value >= 0 && idade.value <= 17){
                img.setAttribute("src", "boy.png")
                } else if (idade.value >= 18 && idade.value < 60){
                    img.setAttribute("src", "man.png")
                } else {
                    img.setAttribute("src", "old_man.png")
                }
            }
        resultado.style.textAlign = "center"
        resultado.innerHTML = `É uma pessoa do gênero ${genero} com idade de ${idade.value} anos, nascida no ano de ${idade_anos}.<br>`
        resultado.appendChild(img)
        
    }

       
}
