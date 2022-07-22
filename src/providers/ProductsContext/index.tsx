import {createContext, useContext, useState, ReactNode} from "react"

import axios from "axios"


interface ChildrenProps {
    children: ReactNode
}

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

interface ContextDataProps {
    category: string
    products: ProductsProps[]
    categoryFunction: (word: string) => void
    getProducts: () => void
}


const ProductsContext = createContext<ContextDataProps>({} as ContextDataProps)


export const ProductsProvider = ({children}: ChildrenProps) => {
    const [category, setCategory] = useState<string>("")
    const [products, setProducts] = useState<ProductsProps[]>([] as ProductsProps[])

    const categoryFunction = (word: string) => {
        setCategory(word)
    }

    const getProducts = () => {
        axios.get("productsCategory.json")
        .then((response) => {
            setProducts(response.data.data.nodes)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <ProductsContext.Provider value={{category, products, categoryFunction, getProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)