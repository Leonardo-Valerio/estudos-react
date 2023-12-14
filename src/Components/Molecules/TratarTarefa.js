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
            <button onClick={handleTarefaIgual}>{props.children}</button>
        </>
    )
}
export default Tratar