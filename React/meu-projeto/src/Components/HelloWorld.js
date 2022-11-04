export default function HelloWorld(){

    const Frase = "Essa frase foi chamada por um outro evento que está dentro desse evento (encapsulamento de eventos)"
    return (
        <div>
            <p>
                {Frase}
            </p>
        </div>
    )
}