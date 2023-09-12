import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const decrementHandler = () => removeItemFromCart(cartItem);
  const incrementHandler = () => addItemToCart(cartItem);
  const clearHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span onClick={decrementHandler}>&#x3c;</span>
        <span className="quantity-number"> {quantity}</span>
        <span onClick={incrementHandler}>&#x3e;</span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
