import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  return (
    <div className="details">

    <img src={product.image} alt="" />

    <h2>{product.title}</h2>

    <p>{product.description}</p>

    <h3>${product.price}</h3>
        
    <button onClick={() => addToCart(product)}>
        Add To Cart
    </button>
    

    </div>
  );
}

export default ProductDetails;