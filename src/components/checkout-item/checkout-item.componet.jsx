/** @format */

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
    console.log("cleared item successfully");
  };
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeItemHandler(cartItem);
          }}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemHandler(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="value">${price}</span>
      <span></span>
      <span
        className="remove-button"
        onClick={() => {
          clearItemHandler(cartItem);
        }}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
