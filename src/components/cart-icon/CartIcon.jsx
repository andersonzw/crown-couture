import React, { useContext } from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/004 shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { cartToggle, setCartToggle } = useContext(CartContext);

  const cartClickHandler = () => {
    setCartToggle(!cartToggle);
    console.log("object");
  };

  return (
    <div className="cart-icon-container" onClick={cartClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
