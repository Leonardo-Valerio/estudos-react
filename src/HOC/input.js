import withChange from "./exHOC"

const InputQueMuda =(props)=>{
    if(props.status){
        return <input onMouseEnter={props.handleMouse} placeholder="of"></input>
    }
    return (
        <>
            <input onMouseEnter={props.handleMouse} placeholder="on"></input>
            <br>
            </br>
            <span>Caixa de Texto</span>
        </>
    )
}
export default withChange(InputQueMuda)