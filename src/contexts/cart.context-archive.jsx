import React, { useEffect, useState } from "react";

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

  // Increase item quantity handler
  const addItemToCart = (productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingCartItem) {
      return setCartItems(cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      ));
    }
    // return new array with modified cartitems/new car item
    return setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
  };

  // Decrease item quantity handler
  const decrementItemQuantity = (cartItemToReduce) => {
    if (cartItemToReduce.quantity <= 1) {
      return setCartItems(
        cartItems.filter((cartItem) => !(cartItem.id === cartItemToReduce.id))
      );
    } else {
      return setCartItems(
        cartItems.map((cartItem) => {
          if (cartItem.id === cartItemToReduce.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        })
      );
    }
  };

  // Delete item handler
  const removeItem = (cartItemToRemove) => {
    setCartItems(
      cartItems.filter((cartItem) => !(cartItem.id === cartItemToRemove.id))
    );
  };

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
    removeItem,
    cartItems,
    itemCount,
    totalPrice,
    setTotalPrice,
    decrementItemQuantity,
  };
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};
