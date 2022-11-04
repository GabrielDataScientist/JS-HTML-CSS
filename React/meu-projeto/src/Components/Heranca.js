export default function Heranca({nome, profissao, idade, foto}){

    return(
        <div>
            Foto: 
            <img src={foto} alt={nome} />
            <p>Nome: {nome}</p>
            <p>Profissao: {profissao}</p>
            <p>Idade: {idade}</p>
        </div>
    )
}