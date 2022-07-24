import {Container} from "./style"

import {useEffect} from "react"

import Header from "../../components/Header/index"
import CardCategories from "../../components/CardCategories/index"

import CardProducts from "../../components/CardProducts/index"

import {useProducts} from "../../providers/ProductsContext/index"


const Dashboard = () => {

    const {getProducts, products, getCategories, categories, selectedCategory} = useProducts()

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    const filteredProducts = products.filter((product) => {
        return product.category.name.toLowerCase() === selectedCategory.toLowerCase()
    })


    return (
        <>
            <Header/>
            <Container>
                <div className="categories">
                    {
                        categories.map((category, index) => (
                            <CardCategories key={index} category={category}/>
                        ))
                    }
                </div>
                <div className="products">
                    {
                        selectedCategory === "Todos" ?
                        products.map((product) => (
                            <CardProducts key={product.id} product={product}/>
                        ))
                        :
                        filteredProducts.map((product) => (
                            <CardProducts key={product.id} product={product}/>
                        ))
                    }
                </div>
            </Container>
        </>
    )
}


export default Dashboard