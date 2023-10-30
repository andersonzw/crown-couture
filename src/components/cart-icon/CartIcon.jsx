import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/004 shopping-bag.svg";
const CartIcon = ({cartClickHandler}) => {
  return (
    <div className="cart-icon-container" onClick={cartClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;