import { useState } from "react"
import Botao from '../Atoms/Buttons'
import Input from "../Atoms/Inputs"

function Excluir(props){
    const [exibir, setExibir] = useState(false)
    const [excluir, setExcluir] = useState('')
    const handleExcluir=()=>{
        if (props.adicionar.includes(excluir)){
        const novaLista = props.adicionar.filter(item => item !== excluir);
        props.setAdicionar(novaLista);
        setExibir(false);
        setExcluir('')
        }
        else{
            alert('A tarefa que vc deseja excluir não está na lista')
        }
        
    }
    
    return(
        <>
            <Botao onClick={()=>{setExibir(true)}}>{props.children}</Botao>
            {exibir? (
            <>
                
                <Input label = {'Digite a Tarefa que deseja excluir'} value={excluir} onChange={e=>{setExcluir(e.target.value)}}></Input>
                
                <Botao onClick={handleExcluir}>Excluir</Botao>
            </>
            ):''}
        </>
    )
}
export default Excluir