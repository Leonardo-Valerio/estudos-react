import { useState } from "react"

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
            <button onClick={()=>{setExibir(true)}}>{props.children}</button>
            {exibir? (
            <>
                <label>Digite a Tarefa que deseja excluir
                    <input value={excluir} onChange={e=>{setExcluir(e.target.value)}}></input>
                </label>
                <button onClick={handleExcluir}>Excluir</button>
            </>
            ):''}
        </>
    )
}
export default Excluir