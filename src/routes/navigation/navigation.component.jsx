/** @format */
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              Sign In
            </Link>
          )}
          {/* <Link className="nav-link" to="/authentication ">
            Sign In
          </Link> */}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
