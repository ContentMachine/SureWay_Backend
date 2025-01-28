const express = require("express");
const { Magnet, TypeMagnet, MagnetSubmission } = require("../models/magnets");
const router = express.Router();
const {
  sizePrices,
  magnetCategories,
  shapesAndSizes,
} = require("../data/magnets");
const capitalize = require("../helpers/capitalize");
const upload = require("../middleware/upload");

// Add a new magnet
router.post("/", async (req, res) => {
  try {
    const { type, name, image, hoverImage, category, createdAt, shape } =
      req.body;

    // Basic validation
    if (!type || !name || !image) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const magnet = new Magnet({
      name,
      type,
      image,
      hoverImage,
      shape,
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

// Get sizes by shape
router.get("/size/sizes/:shape", (req, res) => {
  const { shape } = req.params;

  try {
    const selectedShape = shapesAndSizes?.find((data) => data?.shape === shape);

    if (!selectedShape) {
      return res.status(404).json({ message: "No sizes available" });
    }

    console.log(selectedShape);

    const sizes = selectedShape?.sizes;

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

router.get("/size/by-size/:size/:quantity", (req, res) => {
  try {
    const { size, quantity } = req.params;

    if (!sizePrices[size]) {
      return res.status(404).json({ message: "Size not found." });
    }

    const price = sizePrices[size];
    const basePrice = price;
    const subTotal = basePrice * quantity;
    const estimatedTax = 0.05 * basePrice;
    const shipping = 0;
    const total = subTotal + estimatedTax + shipping;
    res
      .status(200)
      .json({ size, price, subTotal, estimatedTax, shipping, total });
  } catch (err) {
    console.error("Error in GET /api/magnets/size/:size:", err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the price." });
  }
});

router.get("/category/categories", (req, res) => {
  try {
    const categories = magnetCategories?.map((data) =>
      capitalize(data?.replaceAll("-", " "))
    );
    res.status(200).json(categories);
  } catch (err) {
    console.error("Error in GET /api/magnets/size/:size:", err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the price." });
  }
});

router.get("/category/categories/:category", async (req, res) => {
  const { category } = req.params;

  try {
    const filter = category === "all" ? {} : { category };
    const magnets = await Magnet.find(filter);

    res.json(magnets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new magnet type
router.post("/type", async (req, res) => {
  try {
    const { name, type, image, description, shapes, sizes } = req.body;

    // Basic validation
    if (!type || !name || !image || !description || !sizes) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const magnetType = new TypeMagnet({
      name,
      type,
      image,
      description,
      shapes,
      sizes,
    });

    const newMagnetType = await magnetType.save();

    res.status(200).json(newMagnetType);
  } catch (err) {
    console.error("Error in POST /api/magnets:", err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/type/type", async (req, res) => {
  try {
    const typeMagnets = await TypeMagnet.find();
    res.json(typeMagnets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

router.get("/type/type/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const typeMagnet = await TypeMagnet.findOne({ slug });

    if (!typeMagnet) {
      return res.status(404).json({ message: "Magnet type not found" });
    }

    res.json(typeMagnet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/submit-magnet", upload.single("image"), async (req, res) => {
  try {
    const {
      shape,
      dimension,
      fullName,
      email,
      phone,
      customText,
      achievement,
      type,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const newSubmission = new MagnetSubmission({
      shape,
      dimension,
      fullName,
      email,
      phone,
      customText,
      achievement,
      type,
      image: req.file.path,
    });

    await newSubmission.save();
    res.status(200).json(newSubmission);
  } catch (error) {
    res.status(500).json({ error: error || "An error occurred" });
  }
});

router.get("/submit-magnet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const magnetFormDetails = await MagnetSubmission.findOne({ _id: id });

    res.json(magnetFormDetails);
  } catch (error) {
    console.error("Error during submission:", error);
    res.status(500).json({ error: error || "An error occurred" });
  }
});

router.put("/submit-magnet/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const {
      shape,
      dimension,
      fullName,
      email,
      phone,
      customText,
      achievement,
    } = req.body;

    const submission = await MagnetSubmission.findById(id);
    if (!submission) {
      return res.status(404).json({ error: "Magnet submission not found" });
    }

    if (shape) submission.shape = shape;
    if (dimension) submission.dimension = dimension;
    if (fullName) submission.fullName = fullName;
    if (email) submission.email = email;
    if (phone) submission.phone = phone;
    if (customText) submission.customText = customText;
    if (achievement) submission.achievement = achievement;

    if (req.file) {
      submission.image = req.file.path;
    }

    await submission.save();
    res.status(200).json(submission);
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});

module.exports = router;
