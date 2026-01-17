import "./button.css"

export const Button = () =>{
    return(
        <button className='customButton' style={{ color:"blue", backgroundColor:"grey" }} onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>  

    )    
}