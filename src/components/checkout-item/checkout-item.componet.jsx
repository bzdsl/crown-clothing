/** @format */

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  QuantityContainer,
  Arrow,
  QuantityValue,
  Price,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleClearItem = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));

  const handleRemoveItem = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <Name>{name}</Name>

      <QuantityContainer>
        <Arrow onClick={handleRemoveItem}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={handleAddItem}>&#10095;</Arrow>
      </QuantityContainer>

      <Price>${price}</Price>

      <RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
