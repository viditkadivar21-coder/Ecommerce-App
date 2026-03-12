import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { token, logout, cart } = useContext(CartContext);
 
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <h2>Ecommerce Shop</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        {token ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
