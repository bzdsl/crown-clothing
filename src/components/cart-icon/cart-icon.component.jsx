/** @format */
import { useContext } from "react";
import CartIconLogo from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={CartIconLogo} alt="shopping icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
