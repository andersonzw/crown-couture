
import { createSlice } from "@reduxjs/toolkit";
const CART_INITIAL_STATE = {
  cartItems: [],
  cartToggle: false,
};

export const cartSlice = createSlice({
  name:'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    setCartToggle: (state, action) => {
      state.cartToggle = action.payload
    },
    addItemToCart: (state, action) => {
      console.log(action.payload);
      const newCartItems = addCartItem(state.cartItems, action.payload);
      state.cartItems = newCartItems
    },
    decrementItemQuantity: (state,action) =>{
      const newCartItems = removeCartItem(state.cartItems, action.payload);
      state.cartItems = newCartItems
    }, 
    removeItem:(state,action) =>{
      const newCartItems = clearCartItem(state.cartItems, action.payload);
      state.cartItems = newCartItems
    },
    clearCart: (state) => {
      state.cartItems = []
    }
  }
})


export const cartReducer = cartSlice.reducer
export const {setCartToggle, addItemToCart, decrementItemQuantity, removeItem, clearCart} = cartSlice.actions



// Helper functions
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
