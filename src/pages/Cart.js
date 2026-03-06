import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cart, removeFromCart } = useContext(CartContext);
  const [success, setSuccess] = useState(false);

  const handleBuy = () => {
    setSuccess(true);
  };

  return (
    <div className="container">

      <h2>Shopping Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="cartItem">

          <img src={item.image} alt="" width="60" />

          <p>{item.title}</p>

          <p>${item.price}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>

          {cart.length > 0 && (
        <button className="buyBtn" onClick={handleBuy}>
          Buy Now
        </button>
      )}

        </div>
      ))}

      {/* SUCCESS MESSAGE */}

      {success && (
        <div className="successMessage">
          🎉 Order Successful! Thank you for your purchase.
        </div>
      )}

    </div>
  );
}

export default Cart;