const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

let userCarts = {}; // {userId: [{productId: number, quantity: number}]}

router.use(authMiddleware);

router.get("/", (req, res) => {
  const userId = req.user.id;
  const cart = userCarts[userId] || [];
  res.json(cart);
});

router.post("/", (req, res) => {
  const userId = req.user.id;
  const { productId, quantity = 1 } = req.body;
  if (!userCarts[userId]) userCarts[userId] = [];
  const existingIdx = userCarts[userId].findIndex(item => item.productId === productId);
  if (existingIdx > -1) {
    userCarts[userId][existingIdx].quantity += quantity;
  } else {
    userCarts[userId].push({ productId: Number(productId), quantity });
  }
  res.json({ message: "Added to cart", cart: userCarts[userId] });
});

router.delete("/:productId", (req, res) => {
  const userId = req.user.id;
  const productId = Number(req.params.productId);
  if (userCarts[userId]) {
    userCarts[userId] = userCarts[userId].filter(item => item.productId !== productId);
  }
  res.json({ message: "Removed from cart" });
});

router.put("/:productId", (req, res) => {
  const userId = req.user.id;
  const productId = Number(req.params.productId);
  const { quantity } = req.body;
  if (userCarts[userId]) {
    const item = userCarts[userId].find(item => item.productId === productId);
    if (item) item.quantity = Number(quantity);
  }
  res.json({ message: "Cart updated" });
});

module.exports = router;
