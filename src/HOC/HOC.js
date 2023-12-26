import { useState } from "react"

const UpdatedComponent = (OriginalComponent)=>{
    const NewComponent = ({nome})=>{
        const [money, setMoney] = useState(10)
        const handleClick = ()=>{
            setMoney(money * 2)
        }
      
        return <OriginalComponent  handleClick = {handleClick} money={money} nome={nome}/>
    }
    return NewComponent
}
export default UpdatedComponent