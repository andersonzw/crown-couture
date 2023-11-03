import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ item }) => {
  const { removeItem, decrementItemQuantity, addItemToCart } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = item;

  const handleIncrement = () => {
    addItemToCart(item);
  };

  const handleDelete = () => {
    removeItem(item)
  }

  const handleDecrement = () => {
    decrementItemQuantity(item)
  }
  return (
    <div className="product-row">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="price">${price}</span>
      <span className="quantity">
        <span onClick={handleDecrement}>-</span>{quantity}
        <span onClick={handleIncrement}>+</span>
      </span>
      <span onClick={handleDelete} className="remove-button">x</span>
    </div>
  );
};

export default CheckOutItem;
