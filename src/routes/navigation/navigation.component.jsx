/** @format */
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrownLogo} alt="Crown Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <CartIcon />

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              Sign In
            </Link>
          )}
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
