import { useEffect, useState } from "react";
import Tratar from "../Molecules/TratarTarefa";
import Excluir from "../Molecules/ExcluirTarefa";
import Editar from "../Molecules/EditarTarefa";

function ListarTarefas(){
    const [tarefas,setTarefa] =  useState('')
    const [adicionar, setAdicionar] = useState([])
    
    useEffect(()=>{
        console.log(adicionar)
    },[adicionar])    

return(
    <>
        <h1>Lista de Tarefas</h1>
        <label>
            Escreva a Tarefa que quer adicionar
            <input value={tarefas} onChange={ e=> {setTarefa(e.target.value)}}></input>
        </label>
        <Tratar tarefa = {tarefas} setAdicionar = {setAdicionar} adicionar={adicionar}>Adiciona Tarefa</Tratar>
        <Excluir adicionar= {adicionar} setAdicionar = {setAdicionar}>Excluir Tarefa</Excluir>
        <Editar adicionar = {adicionar} setAdicionar ={setAdicionar}>Editar Tarefa</Editar>
        <ul>
            {
                adicionar.map((item, index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ul>
    </>
)
}
export default ListarTarefas