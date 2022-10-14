import HelloWorld from "./HelloWorld";

function Evento(){

    function meuEvento(){
        console.log("Opa, fui ativado!")
    }
    return (
        <div>
            <p>
                < HelloWorld/>
                Clique para disparar o evento! Resultado será mostrado no console
            </p>
            <button onClick={meuEvento}>Clique aqui!</button>
        </div>
    )

}

export default Evento;