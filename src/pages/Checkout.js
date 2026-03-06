import React from "react";

function Checkout() {

  const handleOrder = () => {
    alert("Order Placed Successfully");
  };

  return (
    <div className="container">

      <h2>Checkout</h2>

      <input placeholder="Full Name" />
      <input placeholder="Address" />
      <input placeholder="Phone" />

      <button onClick={handleOrder}>
        Place Order
      </button>

    </div>
  );
}

export default Checkout;