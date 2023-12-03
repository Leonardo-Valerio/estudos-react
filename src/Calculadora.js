import { useEffect, useState } from "react";

function Calculate(){
    const [numeroUm,setNumeroUm] = useState(0)
    const [numeroDois, setNumeroDois] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [historico, setHistorico] = useState([])
    useEffect(()=>{
        setHistorico([...historico,resultado])
        console.log(historico)
    }, [resultado])
    return(
        <>
        <h1>Calculadora</h1>
        <label>
            Número um
            <input value={numeroUm} onChange={e =>{setNumeroUm(Number(e.target.value))}}></input>
        </label>
        <label>
            Número dois
            <input value={numeroDois} onChange={e =>{setNumeroDois(Number(e.target.value))}}></input>
        </label>

        <button onClick={()=> {setResultado(numeroUm+numeroDois)}}>+</button>
        <button onClick={()=> {setResultado(numeroUm-numeroDois)}}>-</button>
        <button onClick={()=> {setResultado(numeroUm*numeroDois)}}>*</button>
        <button onClick={()=> {setResultado(numeroUm/numeroDois)}}>/</button>
        <h2>{resultado}</h2>
        </>
    )
}
export default Calculate