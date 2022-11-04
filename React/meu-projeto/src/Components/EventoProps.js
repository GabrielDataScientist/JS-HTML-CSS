export default function ChameMeuNome(props){
    //O props vai permitir o uso dinâmico da variável, que pode receber vários atributos.
    //O método props é somente para leitura
    return (
        <div>
            <p>
                Olá, este é o meu nome: {props.nome}
            </p>
        </div>
    )
}