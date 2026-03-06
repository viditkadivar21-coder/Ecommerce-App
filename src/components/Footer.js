import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>E-Shop</h3>
          <p>Your one stop online shopping store.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@eshop.com</p>
          <p>Phone: +91 99999 99999</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 E-Shop | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;