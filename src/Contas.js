

function Math(props){
    


    const calculo = (operation)=> {
        if (operation === '+'){
            props.setResultado(props.numeroUm + props.numeroDois)
        }else if(operation === '-'){
            props.setResultado(props.numeroUm - props.numeroDois)
        }else if(operation === '*'){
            props.setResultado(props.numeroUm * props.numeroDois)
        }else if(operation === '/'){
            props.setResultado(props.numeroUm / props.numeroDois)
        }
    }
    return(
    <>
    <button onClick={()=> {calculo(props.children)}}>{props.children}</button>
    </>
    )
}
export default Math
