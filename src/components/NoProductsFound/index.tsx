import {Container} from "./style"

import {useProducts} from "../../providers/ProductsContext/index"


const NoProductsFound = () => {

    const {category} = useProducts()

    return (
        <Container>
            <div className="missingResults">
                <h1>Não houve resultados para a pesquisa: <span>{category}</span></h1>
            </div>
        </Container>
    )
}


export default NoProductsFound