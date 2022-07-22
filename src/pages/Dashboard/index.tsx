import {Container} from "./style"

import {useEffect} from "react"

import Header from "../../components/Header/index"

import CardProducts from "../../components/CardProducts/index"
import NoProductsFound from "../../components/NoProductsFound"

import {useProducts} from "../../providers/ProductsContext/index"


const Dashboard = () => {

    const {getProducts, products, category} = useProducts()

    useEffect(() => {
        getProducts()
    }, [])

    const filteredProducts = products.filter((product) => {
        return product.category.name.toLowerCase().includes(category.toLowerCase())
    })


    return (
        <>
            <Header/>
            <Container>
                <div className="products">
                    {
                        filteredProducts.length > 0 
                        ?
                        filteredProducts.map((product) => (
                            <CardProducts key={product.id} product={product}/>
                        ))
                        :
                        <NoProductsFound/>
                    }
                </div>
            </Container>
        </>
    )
}


export default Dashboard