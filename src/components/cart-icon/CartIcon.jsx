import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/004 shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setCartToggle } from "../../store/cart/cart.reducer";
const CartIcon = () => {
  const dispatch = useDispatch()
  const cartToggle = useSelector(selectIsCartOpen)
  const itemCount = useSelector(selectCartCount)

  const cartClickHandler = () => {
    dispatch(setCartToggle(!cartToggle));
  };

  return (
    <div className="cart-icon-container" onClick={cartClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
