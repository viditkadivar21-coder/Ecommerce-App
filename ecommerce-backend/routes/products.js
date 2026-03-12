const express = require("express");
const router = express.Router();

let products = [
  { 
    id: 1, 
    name: "Laptop", 
    price: 800,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    description: "High-performance laptop for work and gaming."
  },
  { 
    id: 2, 
    name: "Phone", 
    price: 500,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    description: "Latest smartphone with advanced camera."
  }
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

router.post("/", (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);

  res.json({
    message: "Product added",
    product: newProduct
  });
});

router.put("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;

  res.json({
    message: "Product updated",
    product
  });
});

router.delete("/:id", (req, res) => {
  products = products.filter(p => p.id != req.params.id);

  res.json({
    message: "Product deleted"
  });
});

module.exports = router;