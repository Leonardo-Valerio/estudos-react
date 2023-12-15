import { useState } from "react";
import Botao from '../Atoms/Buttons'
import Input from "../Atoms/Inputs";
function Editar(props){
    const [editar,setEditar] = useState('')
    const [novaTarefa, setNovaTarefa] = useState('')
    const [exibir, setExibir] = useState(false)
    
    const handleEditar=()=>{
        if(props.adicionar.includes(editar)){
            const index = props.adicionar.indexOf(editar)
            const novaLista = [...props.adicionar] 
            if (props.adicionar.includes(novaTarefa)){
                alert('A tarefa que vc deseja adicionar já está na lista ')
            }else{
                novaLista[index] = novaTarefa
                props.setAdicionar(novaLista)
                setExibir(false)
            }
        }else{
            alert('A tarefa que vc deseja editar não está na lista ')
        }
        
    }
    return(
        <>
            <Botao onClick={()=>{setExibir(true)}}>{props.children}</Botao>
            {exibir?(
                <>
                       
                    <Input label={'Digite a tarefa que deseja editar'}value={editar} onChange={e=>{setEditar(e.target.value)}}></Input>
                    
                    <Input label ={'Digite a nova tarefa que deseja acrescentar na lista'} value ={novaTarefa} onChange={e=>{setNovaTarefa(e.target.value)}}></Input>
                    
                    <Botao onClick={handleEditar}>Editar</Botao>
                </>
            ):''}
        </>
    )
}
export default Editar