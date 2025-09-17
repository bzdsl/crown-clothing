/** @format */
import { useContext } from "react";
import CartIconLogo from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.style.scss";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img className="shopping-icon" src={CartIconLogo} alt="" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
