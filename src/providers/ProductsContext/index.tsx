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
    categories: string[]
    selectedCategory: string
    products: ProductsProps[]
    getProducts: () => void
    getCategories: () => void
    selectCategory: (category: string) => void
}


const ProductsContext = createContext<ContextDataProps>({} as ContextDataProps)


export const ProductsProvider = ({children}: ChildrenProps) => {
    const [category, setCategory] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
    const [products, setProducts] = useState<ProductsProps[]>([] as ProductsProps[])
    const [categories, setCategories] = useState<string[]>([] as string[])

    const getProducts = () => {
        axios.get("productsCategory.json")
        .then((response) => {
            setProducts(response.data.data.nodes)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getCategories = () => {
        axios.get("productsCategory.json")
        .then((response) => {
            const productsList = response.data.data.nodes

            let tempCategories: any = ["Todos"]

            productsList.map((product: ProductsProps) => {
                const productExists = tempCategories.includes(product.category.name)

                if(!productExists) {
                    tempCategories = [...tempCategories, product.category.name]
                }
            })


            setCategories(tempCategories)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const selectCategory = (category: string) => {
        setSelectedCategory(category)
    }

    return (
        <ProductsContext.Provider value={{category, categories, selectedCategory, products, getProducts, getCategories, selectCategory}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)