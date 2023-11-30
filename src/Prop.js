
const TestProp =(props)=>{
    return(
        <button onClick={()=>props.onAcaoNoClique(props.mensagemNoClique)}>{props.children}</button>
    )
}
export default TestProp