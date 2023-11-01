import React, { useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains produdtToAdd

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  console.log(existingCartItem);

  // if found, increment quantity

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  // return new array with modified cartitems/new car item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = React.createContext({
  cartToggle: false,
  setCartToggle: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemCount: 0,
  setItemCount: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartToggle, setCartToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // Cart item counter, recalculates everytime cartItems array is updated
  useEffect(() => {
    setItemCount(
      cartItems.reduce(
        (total, currentObject) => total + currentObject.quantity,
        0
      )
    );
  }, [cartItems]);

  const state = {
    cartToggle,
    setCartToggle,
    addItemToCart,
    cartItems,
    itemCount,
  };
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};
