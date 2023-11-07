import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./Checkout.scss";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";
import Button from "../../components/button/Button";
const Checkout = () => {
  const { cartItems, totalPrice, itemCount } = useContext(CartContext);

  return (
    <div className="paddings innerWidth flexColCenter checkout-container">
      {!itemCount && <p>Your cart is empty</p>}
      {!!itemCount && <div className="product-row label">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>}
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}

      <div className="price-container flexCenter">
        <span>Total: ${totalPrice}</span>
        <Button>pay now</Button>
      </div>
    </div>
  );
};

export default Checkout;
