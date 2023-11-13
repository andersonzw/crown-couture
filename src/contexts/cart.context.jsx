import React, { useReducer } from "react";
import { createAction } from "../util/reducer/reducer.utils";

const INITIAL_STATE = {
  itemCount: 0,
  cartItems: [],
  cartToggle: false,
  totalPrice: 0,
};
const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};
// REDUCER
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        cartToggle: payload,
      };
  }
};

//Context
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
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, itemCount, totalPrice, cartToggle } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, currentObject) => total + currentObject.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, currentObject) =>
        total + currentObject.quantity * currentObject.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        totalPrice: newCartTotal,
        itemCount: newCartCount,
      })
    );
  };
  // Increase item quantity handler
  const addItemToCart = (productToAdd) => {
    const newCartItems = () => {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
      );
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
    updateCartItemsReducer(newCartItems());
    console.log(newCartItems());
  };

  // Decrease item quantity handler
  const decrementItemQuantity = (cartItemToReduce) => {
    const newCartItems = () => {
      if (cartItemToReduce.quantity <= 1) {
        return cartItems.filter(
          (cartItem) => !(cartItem.id === cartItemToReduce.id)
        );
      } else {
        return cartItems.map((cartItem) => {
          if (cartItem.id === cartItemToReduce.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        });
      }
    };
    updateCartItemsReducer(newCartItems());
  };

  // Delete item handler
  const removeItem = (cartItemToRemove) => {
    const newCartItems = cartItems.filter(
      (cartItem) => !(cartItem.id === cartItemToRemove.id)
    );
    updateCartItemsReducer(newCartItems);
  };

  const setCartToggle = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  // States that you want to provide
  const value = {
    cartToggle,
    setCartToggle,
    addItemToCart,
    removeItem,
    cartItems,
    itemCount,
    totalPrice,
    decrementItemQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
