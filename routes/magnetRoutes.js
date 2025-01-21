const express = require("express");
const Magnet = require("../models/magnets");
const router = express.Router();
const { sizePrices } = require("../data/magnets");

// Add a new magnet
router.post("/", async (req, res) => {
  try {
    const { type, name, image, hoverImage, category, createdAt } = req.body;

    // Basic validation
    if (!type || !name || !image) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const magnet = new Magnet({
      name,
      type,
      image,
      hoverImage,
      category: category || "default",
      createdAt: createdAt || new Date(),
    });

    const newMagnet = await magnet.save();

    res.status(201).json(newMagnet);
  } catch (err) {
    console.error("Error in POST /api/magnets:", err);
    res.status(500).json({ message: err.message });
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

// Get Magnet by type
router.get("/type/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const filter = type === "all" ? {} : { type };
    const magnets = await Magnet.find(filter);

    res.json(magnets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const magnet = await Magnet.findOne({ slug });

    if (!magnet) {
      return res.status(404).json({ message: "Magnet not found" });
    }

    res.json(magnet);
  } catch (err) {
    console.error("Error in GET /api/magnets/:slug:", err);
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const deletedMagnet = await Magnet.findOneAndDelete({ slug });

    if (!deletedMagnet) {
      return res.status(404).json({ message: "Magnet not found" });
    }

    res
      .status(200)
      .json({ message: "Magnet deleted successfully", magnet: deletedMagnet });
  } catch (err) {
    console.error("Error in DELETE /api/magnets/:slug:", err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the magnet." });
  }
});

router.get("/size/sizes", (req, res) => {
  try {
    if (!sizePrices) {
      return res.status(404).json({ message: "No sizes available" });
    }

    const sizes = Object.keys(sizePrices);
    res.status(200).json(sizes);
  } catch (err) {
    console.error("Error in GET /api/magnets/size/:size:", err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the sizes." });
  }
});

router.get("/size/by-size/:size", (req, res) => {
  try {
    const { size } = req.params;

    console.log(sizePrices[size], size, sizePrices["12x12"]);

    if (!sizePrices[size]) {
      return res.status(404).json({ message: "Size not found." });
    }

    res.status(200).json({ size, price: sizePrices[size] });
  } catch (err) {
    console.error("Error in GET /api/magnets/size/:size:", err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the price." });
  }
});

module.exports = router;
