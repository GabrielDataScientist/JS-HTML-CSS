import React from "react";
import './App.css';
import Evento from "./Components/Evento";
import Evento2 from "./Components/Evento2";
import ChameMeuNome from "./Components/EventoProps";
import Heranca from "./Components/Heranca";

function App() {

  //Para declarar variáveis, let é a melhor escolha
  let Nome = "José"

  //O const é para declarar uma variável imutável
  const valor = 25
  const nome = "José Gabriel"

  //Nesse caso, a const recebe um objeto(chave), onde suas chaves são imutáveis,
  //Porém, seus valores(propriedades) são mutáveis
  const objeto = {
    Nome: "José Gabriel",
    Idade: 25,
    Funcao: null
  }

  //Criando um outra função para retornar uma soma.
  //Function é o equivalente def do python
  function Soma(a, b){
    return a + b
  }

  return (
    //As tags devem estar encapsuladas na tag <div></div>
    <div>
      <h1> Hello, world</h1>
      <p> Meu nome é José Gabriel, esse é meu primeiro contato com o React</p>
      <hr></hr>
      <p>
         Meu nome, <strong>{Nome}</strong>, foi chamado por uma variável pré-definida
      </p>
      <p>
        A minha idade, <strong>{valor}</strong>, também foi chamado por uma variável const pré-definida
      </p>
      <hr></hr>
      <h1>Testando o objeto const</h1>
      <p>
          Meu nome é: {objeto.Nome}<br></br>
          Minha idade é: {objeto.Idade}<br></br>
          Meu nome em letras maiúsculas: {objeto.Nome.toUpperCase()}
      </p>
      <hr></hr>
      <h2>Alterando meu nome</h2>
      <p>
        Meu nome completo é: {objeto.Nome = "José Gabriel Neves Bueno"}<br></br>
        Minha função é: {objeto.Funcao = "Desenvolvedor Web"}
      </p>
      <hr></hr>
      <h1> Retornando a função soma</h1>
      <p>A soma é: {Soma(2, 2)}</p>
      <hr></hr>
      <h1>Testando Eventos</h1>
      <Evento />
      <hr></hr>
      <h1> Testando outro evento</h1>
      < Evento2 numero={1} />
      <hr></hr>
      <h1>Testando componentes e props</h1>
      <p>As props(properties) são uma forma dinâmica de uma mesma 
        variável aceitar diversos valores. É a famosa herença.</p>
      <p>
          <ChameMeuNome nome = "José"/>
          <ChameMeuNome nome = "Gabriel"/>
          <ChameMeuNome nome = {nome}/>
      </p>
      <h2>Utilizando a herança sem especificar o método props, apenas passando 
        as variáveis por referência </h2>
        <p>
       <Heranca nome="José" idade="25" profissao="Programador" foto="../../../Desafios/eu.jpg"/>
        </p>
    </div>
  )
}

//Chamando a classe. No Python seria, app().
export default App;
