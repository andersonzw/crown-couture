import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styles";
import "./Spinner.scss"

import React from "react";

const Spinner = () => {
  return (
    <div className="divLoading">
      <div className="loadingItem1"></div>
      <div className="loadingItem2"></div>
      <div className="loadingItem3"></div>
    </div>
  );
};

export default Spinner;
