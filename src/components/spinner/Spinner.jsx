import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styles";
import "./Spinner.scss"

import React from "react";

const Spinner = () => {
  return (
    <div class="divLoading">
      <div class="loadingItem1"></div>
      <div class="loadingItem2"></div>
      <div class="loadingItem3"></div>
    </div>
  );
};

export default Spinner;
