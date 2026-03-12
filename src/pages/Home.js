import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);

  // Slider images
  const images = [
    "https://i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg",
    "https://www.fotovalley.com/wp-content/uploads/2021/08/eCommerce-Photography.jpg",
    "https://shoppiko.com/image/BUSINESS/new-images/clothing.jpg",
    "https://tse1.mm.bing.net/th/id/OIP.2VzOgSQbhgrLzYUJ3MeNcwHaE8?pid=Api&P=0&h=180"
  ];

  const [current, setCurrent] = useState(0);

  // Auto rotate images
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slider);
  }, [images.length]);

  // Fetch products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>

      {/* Image Slider */}
      <div className="slider">
        <img src={images[current]} alt="banner" />
      </div>

      {/* Products */}
      <div className="container">
        <h2>Products</h2>

        <div className="grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default Home;