import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/007 crown.svg";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../util/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {
  const { cartToggle, setCartToggle } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    closeCart()
    await signOutUser();
  };

  const closeCart = () => {
    setCartToggle(false);
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
