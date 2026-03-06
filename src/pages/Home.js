import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container">

      <h2>Products</h2>

      <div className="grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </div>
  );
}

export default Home;