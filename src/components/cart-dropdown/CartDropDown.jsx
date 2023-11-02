import React, { useContext } from "react";
import Button from "../button/Button";
import "./CartDropDown.scss";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
const CartDropDown = () => {
  const { cartItems, setCartToggle, itemCount } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      { !itemCount && <p>Your cart is Empty</p>}
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={() => setCartToggle((prev) => !prev)}>
          GO TO CHECKOUT
        </Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
