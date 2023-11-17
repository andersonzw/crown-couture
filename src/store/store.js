import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// Every store requires reducer
// root-reducer

const persistConfig = {
  key: "root", //persist the whole thing
  storage,
  whitelist: ["cart"], //user is already persisted with authlistener
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //returns array of the default middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, //turns off serialise check middleware
    }).concat(logger),
});

export const persistor = persistStore(store); //export into index js
