import {Container} from "./style"

import {useProducts} from "../../providers/ProductsContext/index"


interface InputProps {
    type: string
    placeholder: string
}


const Input = ({type, placeholder}: InputProps) => {

    const {categoryFunction} = useProducts()

    return (
        <Container>
            <input type={type} placeholder={placeholder} onChange={(evt) => categoryFunction(evt.target.value)}/>
        </Container>
    )
}


export default Input