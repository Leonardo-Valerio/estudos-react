import { useEffect, useState } from "react";

function Math(props){
   
    const [historico, setHistorico] = useState([])
    useEffect(()=>{
        setHistorico([...historico,props.resultado])
        console.log(historico)
    }, [props.resultado])

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
