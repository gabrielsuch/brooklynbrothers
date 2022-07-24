import {Container} from "./style"

import {useEffect} from "react"

import Header from "../../components/Header/index"
import CardCategories from "../../components/CardCategories/index"

import CardProducts from "../../components/CardProducts/index"

import {useProducts} from "../../providers/ProductsContext/index"


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


const Dashboard = () => {

    const {getProducts, products, getCategories, categories, selectedCategory} = useProducts()

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    const filteredProducts = products.filter((product: ProductsProps) => {
        return product.category.name.toLowerCase() === selectedCategory.toLowerCase()
    })


    return (
        <>
            <Header/>
            <Container>
                <div className="categories">
                    {
                        categories.map((category: string, index) => (
                            <CardCategories key={index} category={category}/>
                        ))
                    }
                </div>
                <div className="products">
                    {
                        selectedCategory === "Todos" ?
                        products.map((product: ProductsProps) => (
                            <CardProducts key={product.id} product={product}/>
                        ))
                        :
                        filteredProducts.map((product: ProductsProps) => (
                            <CardProducts key={product.id} product={product}/>
                        ))
                    }
                </div>
            </Container>
        </>
    )
}


export default Dashboard