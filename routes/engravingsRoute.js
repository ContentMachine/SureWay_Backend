const mongoose = require("mongoose");
const express = require("express");
const { engravingCategories } = require("../data/engravings");
const { EngravingsMerch } = require("../models/engravings");
const upload = require("../middleware/upload");

const router = express.Router();

router.get("/categories", async (req, res) => {
  try {
    const categories = await engravingCategories;

    if (!categories.length) {
      return res
        .status(404)
        .json({ message: "No engraving categories available" });
    }

    return res.status(200).json({ categories });
  } catch (err) {
    console.error("Error in GET /api/engravings/categories", err);
  }
});

router.get("/merch", async (req, res) => {
  try {
    const engravedProducts = await EngravingsMerch.find();

    if (!engravedProducts?.length) {
      return res
        .status(404)
        .json({ message: "No engraved products available" });
    }

    return res.status(200).json({ engravedProducts });
  } catch (err) {
    console.error("Error in GET /api/engravings/merch", err);
  }
});

router.post("/merch", upload.array("images", 3), async (req, res) => {
  try {
    const { name, type, description, features, price } = req.body;

    if (!name || !type || !description || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const imagePaths = req.files.map((file) => file.path);

    const engravedProduct = new EngravingsMerch({
      name,
      type,
      description,
      features,
      price,
      createdAt: new Date(),
      images: imagePaths,
    });

    const newEngravedProduct = await engravedProduct.save();
    res.status(200).json(newEngravedProduct);
  } catch (err) {
    console.error("Error in POST /api/engravings/merch:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
