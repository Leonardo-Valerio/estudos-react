import { useState } from "react"

const withChange=(Component)=>{
    const WithChange=()=>{
        const [status,setStatus] = useState(false)
        const handleMouse =()=>{
            setStatus(!status)
        }
        return <Component status = {status} handleMouse = {handleMouse}></Component>
    }
    return WithChange
}
export default withChange