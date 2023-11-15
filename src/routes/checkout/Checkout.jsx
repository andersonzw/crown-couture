
import "./Checkout.scss";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";
import Button from "../../components/button/Button";
import { useSelector } from "react-redux";
import { selectCartCount, selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
const Checkout = () => {

  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotal)
  const itemCount = useSelector(selectCartCount)

  return (
    <div className="paddings innerWidth flexColCenter checkout-container mobile-padding-container">
      {!itemCount && <p>Your cart is empty</p>}
      {!!itemCount && <div className="product-row label">
        <span>Product</span>
        <span>Name</span>
        <span>Price</span>
        <span>Qty</span>
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
