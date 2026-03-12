const express = require("express");
const router = express.Router();

let messages = []; // in-memory

router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const newMessage = {
    id: messages.length + 1,
    name,
    email,
    message,
    date: new Date().toISOString()
  };
  messages.push(newMessage);
  res.json({ message: "Contact message sent successfully", contact: newMessage });
});

module.exports = router;
