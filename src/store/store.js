import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
// Every store requires reducer
// root-reducer

const persistConfig = {
  key:'root', //persist the whole thing
  storage,
  blacklist: ['user'] //user is already persisted with authlistener
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// creating our own logger function
const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState', store.getState());

  next(action)
  console.log('next state', store.getState());
};
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// runs before an action hits an reducer
const middleWares = [process.env.NODE_ENV === 'production' &&loggerMiddleWare].filter(Boolean)

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store) //export into index js