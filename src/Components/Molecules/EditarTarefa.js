import { useState } from "react";

function Editar(props){
    const [editar,setEditar] = useState('')
    const [novaTarefa, setNovaTarefa] = useState('')
    const [exibir, setExibir] = useState(false)
    
    const handleEditar=()=>{
        if(props.adicionar.includes(editar)){
            const index = props.adicionar.indexOf(editar)
            const novaLista = [...props.adicionar]
            novaLista[index] = novaTarefa
            props.setAdicionar(novaLista)
            setExibir(false)
        }else{
            alert('A tarefa que vc deseja editar não está na lista')
        }
        
    }
    return(
        <>
            <button onClick={()=>{setExibir(true)}}>{props.children}</button>
            {exibir?(
                <>
                    <label>
                        Digite a tarefa que deseja editar
                        <input value={editar} onChange={e=>{setEditar(e.target.value)}}></input>
                    </label>
                    <label>
                        Digite a nova tarefa que deseja acrescentar na lista
                        <input value ={novaTarefa} onChange={e=>{setNovaTarefa(e.target.value)}}></input>
                    </label>
                    <button onClick={handleEditar}>Editar</button>
                </>
            ):''}
        </>
    )
}
export default Editar