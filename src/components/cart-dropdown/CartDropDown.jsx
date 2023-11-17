import Button from "../button/Button";
import "./CartDropDown.scss";
import CartItem from "../cart-item/CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectCartItems } from "../../store/cart/cart.selector";
import { setCartToggle } from "../../store/cart/cart.reducer";
const CartDropDown = () => {

  const cartItems = useSelector(selectCartItems)
  const itemCount = useSelector(selectCartCount)
  const dispatch = useDispatch()

  return (
    <div className="cart-dropdown-container">
      { !itemCount && <p>Your cart is empty</p>}
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={() => dispatch(setCartToggle(false))}>
          GO TO CHECKOUT
        </Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
