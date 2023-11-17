
import { useDispatch, } from "react-redux";
import { addItemToCart, decrementItemQuantity, removeItem } from "../../store/cart/cart.reducer";


const CheckOutItem = ({ item }) => {
  const dispatch = useDispatch()
  const { imageUrl, name, quantity, price } = item;

  const handleIncrement = () => {
    dispatch(addItemToCart(item));
  };

  const handleDelete = () => {
    dispatch(removeItem(item))
  }

  const handleDecrement = () => {
    dispatch(decrementItemQuantity( item))
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
