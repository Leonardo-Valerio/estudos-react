import Botao from "../Atoms/Buttons"

function Tratar(props){
    const handleTarefaIgual = ()=>{
        if(props.adicionar.includes(props.tarefa)){
            alert('Tarefa já existente na lista')
        }
        else{
            props.setAdicionar([...props.adicionar,props.tarefa])
        }
    }
    return(
        <>
            <Botao onClick={handleTarefaIgual}>{props.children}</Botao>
        </>
    )
}
export default Tratar