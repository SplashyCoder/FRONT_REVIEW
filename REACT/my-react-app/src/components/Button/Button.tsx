import "./button.css"

interface ButtonProps {
    label: string,
    parentMethod: () => void

}

export const ButtonChildren = ({label}: Omit<ButtonProps, "parentMethod">) =>{
    return(
        <div>{label}</div>
    )
}

export const Button = ({label, parentMethod}: ButtonProps) =>{
    return(
        <button className='customButton' style={{ color:"blue", backgroundColor:"grey" }} onClick={parentMethod}>
            <ButtonChildren label={label}/>       
        </button>  

    )    
}