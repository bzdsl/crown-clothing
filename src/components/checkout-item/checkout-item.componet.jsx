/** @format */

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
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
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const handleClearItem = () => {
    clearItemFromCart(cartItem);
  };

  const handleAddItem = () => {
    addItemToCart(cartItem);
  };

  const handleRemoveItem = () => {
    removeItemFromCart(cartItem);
  };

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
