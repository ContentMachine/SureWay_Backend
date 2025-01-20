const express = require("express");
const Magnet = require("../models/magnets");
const router = express.Router();

// Add a new magnet
router.post("/", async (req, res) => {
  const { type, name, title, price, image, hoverImage } = req.body;

  const magnet = new Magnet({ type, name, title, price, image, hoverImage });

  try {
    const newMagnet = await magnet.save();
    res.status(201).json(newMagnet);
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
});

// Get all magnets
router.get("/", async (req, res) => {
  try {
    const magnets = await Magnet.find();
    res.json(magnets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/type/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const magnets = await Magnet.find({ type });
    res.json(magnets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
