import {Container} from "./style"

import {useProducts} from "../../providers/ProductsContext/index"


interface CategoryProps {
    category: string
}

const CardCategories = ({category}: CategoryProps) => {

    const {selectCategory} = useProducts()

    return (
        <Container onClick={() => selectCategory(category)}>
            <p>
                {category}
            </p>
        </Container>
    )
}


export default CardCategories