const Input = (props)=>{
    return(
        <>
            <label>
                {props.label}
                <input value={props.value} onChange={props.onChange}></input>
            </label>
        </>
    )
}
export default Input