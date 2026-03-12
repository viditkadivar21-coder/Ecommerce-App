const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let users = [];

router.post("/register", async (req, res) => {

  const { name, email, password } = req.body;

  const userExists = users.find(u => u.email === email);

  if (userExists) {
    return res.json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  res.json({
    message: "User registered successfully"
  });

});

router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    "204351001429fc9a0fd16dbbe0f1c01c",
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token
  });

});

module.exports = router;