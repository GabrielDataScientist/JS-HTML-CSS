import HelloWorld from "./HelloWorld"

export default function Evento2({numero}){
    function meuEvento2(){
        window.alert(`O número digitado foi: ${numero}`)

    }
    return (
        <div>
            <p>
                < HelloWorld/>
                Opa, esse é meu segundo evento! Clique o botão abaixo.
            </p>
            <button onClick={meuEvento2}>Clique aqui!</button>
        </div>
    )
}