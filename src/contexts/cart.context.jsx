import React, { useState } from "react";


export const CartContext = React.createContext({
    cartToggle: false,
    setCartToggle: ()=>{}
})

export const CartProvider = ({children}) =>{
    const [cartToggle, setCartToggle] = useState(false)
    const state = {cartToggle, setCartToggle}
    return <CartContext.Provider value={state}>{children}</CartContext.Provider>
}