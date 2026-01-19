import "./button.css"

interface ButtonProps {
    label: string,
    parentMethod: () => void

}

export const Button = ({label, parentMethod}: ButtonProps) =>{
    return(
        <button className='customButton' style={{ color:"blue", backgroundColor:"grey" }} onClick={parentMethod}>
            {label}
        </button>  

    )    
}