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

router.get("/:type", async (req, res) => {
  const { type } = req.params;

  try {
    if (type === "merchandise") {
      const engravedProducts = await EngravingsMerch.find();

      if (!engravedProducts?.length) {
        return res
          .status(404)
          .json({ message: "No engraved products available" });
      }

      return res.status(200).json({ engravedProducts });
    } else {
      const engravedProducts = await EngravingsMerch.find();

      if (!engravedProducts?.length) {
        return res
          .status(404)
          .json({ message: "No engraved products available" });
      }

      return res.status(200).json({ engravedProducts });
    }
  } catch (err) {
    console.error("Error in GET /api/engravings/merchandise", err);
  }
});

router.get("/:type/:slug", async (req, res) => {
  const { type, slug } = req.params;

  try {
    if (type === "merchandise") {
      const engravedProduct = await EngravingsMerch.find({ slug });

      if (!engravedProduct) {
        return res
          .status(404)
          .json({ message: "No engraved products available" });
      }

      return res.status(200).json({ engravedProduct });
      
    } else {
      const engravedProduct = await EngravingsMerch.find({ slug });

      if (engravedProduct) {
        return res
          .status(404)
          .json({ message: "No engraved products available" });
      }

      return res.status(200).json({ engravedProduct });
    }
  } catch (err) {
    console.error("Error in GET /api/engravings/merchandise/:id", err);
  }
});

router.post("/merchandise", upload.array("images", 3), async (req, res) => {
  try {
    const { name, description, features, priceRange, category } = req.body;

    if (!name || !description || !priceRange) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const imagePaths = req.files.map((file) => file.path);

    const engravedProduct = new EngravingsMerch({
      name,
      description,
      category,
      features,
      priceRange,
      createdAt: new Date(),
      images: imagePaths,
    });

    const newEngravedProduct = await engravedProduct.save();
    res.status(200).json(newEngravedProduct);
  } catch (err) {
    console.error("Error in POST /api/engravings/merchandise", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
