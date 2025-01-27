const mongoose = require("mongoose");
const { magnetCategories, shapes, sizePrices } = require("../data/magnets");

const magnetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ["fridge", "car", "custom"] },
  image: { type: String, required: true },
  hoverImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  category: {
    type: String,
    required: true,
    enum: magnetCategories,
  },
  slug: { type: String, unique: true, required: false },
  shapes: { type: String, required: false, enum: shapes },
});

const typeMagnetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ["fridge", "car", "custom"] },
  image: { type: String, required: false },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  slug: { type: String, unique: true, required: false },
  shapes: { type: [String], required: false, enum: shapes },
  sizes: { type: [String], required: true, enum: Object.keys(sizePrices) },
  bannerImage: { type: String, required: false },
});

const magnetSubmissionSchema = new mongoose.Schema({
  shape: { type: String, required: true },
  dimension: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  customText: { type: String, required: false },
  achievement: { type: String, required: false },
  image: { type: String, required: false },
  type: { type: String, required: true, enum: ["fridge", "car", "custom"] },
  image: { type: String, required: false },
  paid: { type: Boolean, default: false },
  paymentReference: { type: String, default: null },
  paidAt: { type: Date, default: null },

  createdAt: { type: Date, default: Date.now },
});

magnetSchema.pre("save", async function (next) {
  if (this.isModified("name")) {
    const baseSlug = this.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
    let slug = baseSlug;
    let count = 0;

    // Ensure slug is unique
    while (await mongoose.models.Magnet.findOne({ slug })) {
      count++;
      slug = `${baseSlug}-${count}`;
    }

    this.slug = slug;
  }
  next();
});

typeMagnetSchema.pre("save", async function (next) {
  if (this.isModified("name")) {
    const baseSlug = this.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
    let slug = baseSlug;
    let count = 0;

    // Ensure slug is unique
    while (await mongoose.models.Magnet.findOne({ slug })) {
      count++;
      slug = `${baseSlug}-${count}`;
    }

    this.slug = slug;
  }
  next();
});

module.exports = {
  Magnet: mongoose.model("Magnet", magnetSchema),
  TypeMagnet: mongoose.model("TypeMagnet", typeMagnetSchema),
  MagnetSubmission: mongoose.model("MagnetSubmission", magnetSubmissionSchema),
};
