


import { createContext, useState, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../util/firebase/firebase.utils";
import { createAction } from "../util/reducer/reducer.utils";
// actual value you want to acess
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});


export const USER_ACTION_TYPES = {
  'SET_CURRENT_USER': 'SET_CURRENT_USER'
}
const userReducer = (state,action)=>{
  const {type, payload} = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser:payload
      }

    default:
      throw new Error(`unhandled type ${type} in userReducer`)
  }
}



const INITIAL_STATE = {
  currentUser:null
}


export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer,INITIAL_STATE)
  const {currentUser} = state
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES, user))
  }

  useEffect(() => {
    // will get either a user or null based on auth
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
    });
    return unsubscribe;
  }, []);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
