
import { useState } from 'react'
import './App.css'



function App() {
    const [numeroUm, setNumeroUm] = useState(0)
    const [numeroDois, setNumeroDois] = useState(0)
    const [resultado, setResultado] = useState(0)
    return(
        <>
            <h1>Gerenciador de tarefas</h1>
            <label>
                Numero um 
                <input  value={numeroUm} onChange={e => setNumeroUm(Number(e.target.value))}></input>
            </label>
            <label>
                Numero dois
                <input  value={numeroDois} onChange={e => setNumeroDois(Number(e.target.value))}></input>
            </label>

            <button onClick={()=>{setResultado(numeroUm + numeroDois)}}>+</button>
            <button onClick={()=>{setResultado(numeroUm - numeroDois)}}>-</button>
            <button onClick={()=>{setResultado(numeroUm * numeroDois)}}>*</button>
            <button onClick={()=>{setResultado(numeroUm / numeroDois)}}>/</button>
            
            <h2>{resultado}</h2>
            
        </>
    )
}

export default App
