import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import ScrollToTop from "./util/SrollToTop";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ScrollToTop/>
          <App />

      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
