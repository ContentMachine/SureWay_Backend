const mongoose = require("mongoose");

const magnetSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ["fridge", "car", "custom"] },
  name: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  hoverImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
