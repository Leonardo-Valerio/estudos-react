
import UpdatedComponent from "./HOC"

function Person1({ money, handleClick, nome }){
    
    return(
        <>
            <div>
                <h2>{nome} is offering ${money}</h2>
                <button onClick={handleClick}>Increase Money</button>
            </div>
        </>
    )
}
export default UpdatedComponent(Person1)