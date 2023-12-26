import logo from '../logo.svg';
import '../App.css';
import TestProp from '../Prop.js';
import Calculate from '../Calculadora.js';
import ListarTarefas from '../Components/Organisms/Tarefas.js'; 
import Person1 from '../HOC/Person1.js';
import InputQueMuda from '../HOC/input.js';

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
       

      <InputQueMuda></InputQueMuda>
        
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
