import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
    cartItems: [],
    cartToggle: false,
  };


  export const cartReducer = (state = CART_INITIAL_STATE, action ={}) => {
    const { type, payload } = action;
    switch (type) {
      default:
        return state
      case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
          ...state,
        cartItems:payload,
        };
  
      case CART_ACTION_TYPES.SET_IS_CART_OPEN:
        return {
          ...state,
          cartToggle: payload,
        };

      case CART_ACTION_TYPES.CLEAR_CART:
        return {
          ...state, cartItems: []
        }
    }
  };