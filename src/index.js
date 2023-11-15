import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store/store";
import ScrollToTop from "./util/SrollToTop";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop/>
          <App />

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
