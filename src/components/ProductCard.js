import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">

      <img src={product.image} alt={product.title} />

      <h4>{product.title}</h4>

      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button>Details</button>
      </Link>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;