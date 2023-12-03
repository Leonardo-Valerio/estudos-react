import logo from './logo.svg';
import './App.css';
import TestProp from './Prop.js';
import Calculate from './Calculadora.js';
function App() {
  const handleClick = (valor) =>{
    alert('Botão que aciona o tipo 1 de exibição foi clicado, Valor do botão: '+ valor)
  }
  const handleClickTipoDois = (valor) =>{
    alert('Botão que aciona o tipo 2 de exibição foi clicado, Valor do botão: '+ valor)
  }
  return (
    <div className="App">
      <header className="App-header">
       <Calculate></Calculate>
        <TestProp onAcaoNoClique = {handleClick} mensagemNoClique = "Botão 10 clicado">Botao 10</TestProp>
        <TestProp onAcaoNoClique = {handleClickTipoDois} mensagemNoClique = "Botão 20 clicado">Botao 20</TestProp>
        <TestProp onAcaoNoClique = {handleClickTipoDois} mensagemNoClique = "Botão 30 clicado">Botao 30</TestProp>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
