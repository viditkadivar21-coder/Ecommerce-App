const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");
const contactRoutes = require("./routes/contact");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("204351001429fc9a0fd16dbbe0f1c01c API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
