import { useEffect } from "react"

function useResult (resultado){
    useEffect(()=>{
    console.log(`o resultado da conta foi ${resultado}`)
},[resultado])
}

export default useResult