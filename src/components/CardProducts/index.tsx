import {Container} from "./style"

interface AssetProps {
    url: string
}

interface ImageProps {
    asset: AssetProps
    alt: string
}

interface CategoryProps {
    name: string
    id: string
}

interface ProductsProps {
    name: string
    shortDescription: string
    id: string
    images: ImageProps[]
    category: CategoryProps
}

interface Product {
    product: ProductsProps
}

const CardProducts = ({product}: Product) => {

    return (
        <Container>
            <div className="image">
                <img src={product.images[0].asset.url} alt={product.images[0].alt}/>
            </div>
            <div className="info">
                <div className="content">
                    <h2>{product.name}</h2>
                    <p>{product.shortDescription}</p>
                </div>
            </div>
            <div className="category">
                <p>{product.category.name}</p>
            </div>
        </Container>
    )
}


export default CardProducts