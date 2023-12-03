import Math from "./Contas"
import { useState } from "react"
function Calculate(){
    const [numeroUm,setNumeroUm] = useState(0)
    const [numeroDois, setNumeroDois] = useState(0)
    const [resultado, setResultado] = useState(0)
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
            <Math numeroUm = {numeroUm} numeroDois = {numeroDois} setResultado = {setResultado} resultado = {resultado}>+</Math>
        <Math numeroUm = {numeroUm} numeroDois = {numeroDois} setResultado = {setResultado} resultado = {resultado}>-</Math>
        <Math numeroUm = {numeroUm} numeroDois = {numeroDois} setResultado = {setResultado} resultado = {resultado}>*</Math>
        <Math numeroUm = {numeroUm} numeroDois = {numeroDois} setResultado = {setResultado} resultado = {resultado}>/</Math>
        <h2>Resultado : {resultado}</h2>
        </>
    )
}
export default Calculate