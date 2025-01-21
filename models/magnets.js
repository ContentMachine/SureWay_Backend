const mongoose = require("mongoose");

const magnetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ["fridge", "car", "custom"] },
  image: { type: String, required: true },
  hoverImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  category: {
    type: String,
    required: true,
    enum: [
      "valentines-magnet",
      "birthday-magnet",
      "mothers-day-magnet",
      "fathers-day-magnet",
      "default",
    ],
  },
  slug: { type: String, unique: true, required: false },
});

magnetSchema.pre("save", async function (next) {
  console.log("Middle ware is running");

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

module.exports = mongoose.model("Magnet", magnetSchema);
