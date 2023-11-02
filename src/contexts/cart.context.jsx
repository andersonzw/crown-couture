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

// CONTEXT
export const CartContext = React.createContext({
  cartToggle: false,
  setCartToggle: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemCount: 0,
  setItemCount: () => null,
});

// PROVIDER
export const CartProvider = ({ children }) => {
  const [cartToggle, setCartToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const changeQuantity = (selectedItem, action) => {
    console.log(action);
    const value = action === "-" ? -1 : 1;
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === selectedItem.id) {
          return { ...cartItem, quantity: cartItem.quantity + value };
        } else {
          return cartItem;
        }
      })
    );
  };

  const removeItem = (selectedItem) => {
    setCartItems(
      cartItems.filter((cartItem) => !(cartItem.id === selectedItem.id))
    );
  };

  useEffect(() => {
    setCartItems(cartItems.filter((item) => !(item.quantity < 1)));
  }, [itemCount]);

  useEffect(() => {
    // Cart item counter, recalculates everytime cartItems array is updated
    setItemCount(
      cartItems.reduce(
        (total, currentObject) => total + currentObject.quantity,
        0
      )
    );
    // Total price calculator

    setTotalPrice(
      cartItems.reduce(
        (total, currentObject) =>
          total + currentObject.quantity * currentObject.price,
        0
      )
    );
  }, [cartItems]);

  // States that you want to provide
  const state = {
    cartToggle,
    setCartToggle,
    addItemToCart,
    changeQuantity,
    removeItem,
    cartItems,
    itemCount,
    totalPrice,
    setTotalPrice,
  };
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};
