import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/007 crown.svg";

import { signOutUser } from "../../util/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
import { setCartToggle } from "../../store/cart/cart.action";
const Navigation = () => {
  // select the userreducer state from store
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const cartToggle = useSelector(selectIsCartOpen)
  const signOutHandler = async () => {
    closeCart()
    await signOutUser();
  };

  const closeCart = () => {
    dispatch(setCartToggle(false));
  };
  return (
    <>
      <div className=" flexCenter paddings innerWidth navigation">
        <Link onClick={closeCart} className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="flexEnd nav-links-container">
          <Link onClick={closeCart} className="nav-link" to="/shop">
            {" "}
            SHOP
          </Link>
          <Link onClick={closeCart} className="nav-link" to="/shop">
            {" "}
            CONTACT
          </Link>

          {currentUser ? (
            <Link
    
              className="nav-link"
              onClick={signOutHandler}
            >
              SIGN OUT
            </Link>
          ) : (
            <Link onClick={closeCart} className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
          {cartToggle && <CartDropDown />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
