import React, { useState } from "react"
import DEFAULT_PRODUCTS from "../shopdata.json"
export const ProductsContext = React.createContext({
    products: [],
    setProducts: ()=> null,

})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(DEFAULT_PRODUCTS)
    const state = {products, setProducts}
    return <ProductsContext.Provider value={state}>{children}</ProductsContext.Provider>
}

