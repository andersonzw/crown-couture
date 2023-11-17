import "./Checkout.scss";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { clearCart } from "../../store/cart/cart.reducer";
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartCount);

  const dispatch = useDispatch()
  const handleClearCart = () =>{
    dispatch(clearCart())
  }
  return (
    <div className="paddings innerWidth flexColCenter checkout-container mobile-padding-container">
      {!itemCount && <p>Your cart is empty</p>}
      {!!itemCount && (
        <div className="product-row label">
          <span>Product</span>
          <span>Name</span>
          <span>Price</span>
          <span>Qty</span>
          <span>Remove</span>
        </div>
      )}
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}

      <div className="price-container">
        <Button onClick={handleClearCart} buttonType={"inverted"}>clear cart</Button>
        <div>
          <Button>pay now</Button>
          <span>Total: ${totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
