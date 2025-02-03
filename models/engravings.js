const mongoose = require("mongoose");
const { productCategories } = require("../data/products");
const { engravedMerchProductTypes } = require("../data/engravings");

const engravedMerchTypes = engravedMerchProductTypes?.map((data) => data?.type);

const engravedMerchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, enum: engravedMerchTypes },
  images: { type: [String], required: false },
  features: { type: String, required: true },
  price: { type: Number, required: true },
  slug: { type: String, unique: true, required: false },
});

engravedMerchSchema.pre("save", async function (next) {
  if (this.isModified("name")) {
    const baseSlug = this.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
    let slug = baseSlug;
    let count = 0;

    while (await mongoose.models.Engravings.findOne({ slug })) {
      count++;
      slug = `${baseSlug}-${count}`;
    }

    this.slug = slug;
  }
  next();
});

module.exports = {
  Engravings: mongoose.model("EngravingsMerch", engravedMerchSchema),
};
