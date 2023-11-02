import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ item }) => {
  const { changeQuantity, removeItem } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = item;

  const handleClick = (e) => {
    const action = e.target.textContent;
    changeQuantity(item, action);
  };

  const handleDelete = () => {
    removeItem(item)
  }
  return (
    <div className="product-row">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="price">${price}</span>
      <span className="quantity">
        <span onClick={handleClick}>-</span>{quantity}
        <span onClick={handleClick}>+</span>
      </span>
      <span onClick={handleDelete} className="remove-button">x</span>
    </div>
  );
};

export default CheckOutItem;
