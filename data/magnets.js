const sizes = {
  "10cmx10cm": "10cmx10cm",
  "12cmx12cm": "12cmx12cm",
  "15cmx15cm": "15cmx15cm",
  "30cmx30cm": "30cmx30cm",
  "12cmx8cm": "12cmx8cm",
  "16cmx12cm": "16cmx12cm",
  "20cmx16cm": "20cmx16cm",
  "36cmx24cm": "36cmx24cm",
};

const sizePrices = {
  "10cmx10cm": 5000,
  "12cmx12cm": 6500,
  "15cmx15cm": 8000,
  "30cmx30cm": 45000,
  "12cmx8cm": 5000,
  "16cmx12cm": 6750,
  "20cmx16cm": 12500,
  "36cmx24cm": 45000,
};

const magnetCategories = [
  "All",
  "valentines-magnet",
  "birthday-magnet",
  "mothers-day-magnet",
  "fathers-day-magnet",
  "fridge-reminder",
];

const shapes = [
  "circle",
  "square",
  "rectangle",
  "rounded-rectangle",
  "rounded-square",
  "custom",
  "custom-bordered",
  "rounded",
  "square/rectangle",
];

const shapesAndSizes = [
  {
    shape: shapes[0],
    sizes: [
      sizes["10cmx10cm"],
      sizes["12cmx12cm"],
      sizes["15cmx15cm"],
      sizes["30cmx30cm"],
    ],
  },
  {
    shape: shapes[1],
    sizes: [
      sizes["10cmx10cm"],
      sizes["12cmx12cm"],
      sizes["15cmx15cm"],
      sizes["30cmx30cm"],
    ],
  },
  {
    shape: shapes[2],
    sizes: [
      sizes["12cmx8cm"],
      sizes["16cmx12cm"],
      sizes["20cmx16cm"],
      sizes["36cmx24cm"],
    ],
  },

  {
    shape: shapes[3],
    sizes: [
      sizes["12cmx8cm"],
      sizes["16cmx12cm"],
      sizes["20cmx16cm"],
      sizes["36cmx24cm"],
    ],
  },
  {
    shape: shapes[4],
    sizes: [
      sizes["10cmx10cm"],
      sizes["12cmx12cm"],
      sizes["15cmx15cm"],
      sizes["30cmx30cm"],
    ],
  },
  {
    shape: shapes[5],
    sizes: [
      sizes["10cmx10cm"],
      sizes["12cmx12cm"],
      sizes["15cmx15cm"],
      sizes["30cmx30cm"],
      sizes["12cmx8cm"],
      sizes["16cmx12cm"],
      sizes["20cmx16cm"],
      sizes["36cmx24cm"],
    ],
  },
  {
    shape: shapes[6],
    sizes: [
      sizes["10cmx10cm"],
      sizes["12cmx12cm"],
      sizes["15cmx15cm"],
      sizes["30cmx30cm"],
      sizes["12cmx8cm"],
      sizes["16cmx12cm"],
      sizes["20cmx16cm"],
      sizes["36cmx24cm"],
    ],
  },
  {
    shape: shapes[7],
    sizes: [
      sizes["10cmx10cm"],
      sizes["12cmx12cm"],
      sizes["15cmx15cm"],
      sizes["30cmx30cm"],
    ],
  },
];

module.exports = { sizePrices, magnetCategories, shapes, shapesAndSizes };
