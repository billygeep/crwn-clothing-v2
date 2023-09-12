import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutContainer from "../../components/checkout-container/checkout-container.component";
import "./check-out.styles.scss";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="check-out-container">
      <h2>Check out</h2>
      <CheckOutContainer products={cartItems} />
    </div>
  );
};

export default CheckOut;
