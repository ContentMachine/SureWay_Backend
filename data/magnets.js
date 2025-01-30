const sizes = {
  "10cmx10cm": "10cmx10cm",
  "12cmx12cm": "12cmx12cm",
  "15cmx15cm": "15cmx15cm",
  "30cmx30cm": "30cmx30cm",
  "12cmx8cm": "12cmx8cm",
  "16cmx12cm": "16cmx12cm",
  "20cmx16cm": "20cmx16cm",
  "36cmx24cm": "36cmx24cm",
  "30cmx30cm-car": "30cmx30cm",
  "40cmx40cm-car": "40cmx40cm",
  "50cmx50cm-car": "50cmx50cm",
  "40cmx25cm-car": "40cmx25cm",
  "60cmx30cm-car": "60cmx30cm",
  "80cmx35cm-car": "80cmx35cm",
};

const shapes = [
  "circle",
  "square",
  "rectangle",
  "rounded-rectangle",
  "rounded-square",
  "custom",
  "custom-bordered",
  "rounded",
  "square-or-rectangle",
  "custom",
  "square-car",
  "circle-car",
  "rectangle-car",
];

const sizePrices = {
  "10cmx10cm": 5000,
  "12cmx12cm": 6500,
  "15cmx15cm": 8000,
  "30cmx30cm": 45000,
  "12cmx8cm": 5000,
  "16cmx12cm": 6750,
  "20cmx16cm": 12500,
  "36cmx24cm": 45000,
  "30cmx30cm-car": 45000,
  "40cmx40cm-car": 60000,
  "50cmx50cm-car": 75000,
  "40cmx25cm-car": 50000,
  "60cmx30cm-car": 65000,
  "80cmx35cm-car": 80000,
};

const sizePricesWithType = [
  {
    type: "fridge",
    shapes: [
      {
        shape: shapes[0],
        dimensions: [
          {
            dimension: sizes["10cmx10cm"],
            price: sizePrices["10cmx10cm"],
          },
          {
            dimension: sizes["12cmx12cm"],
            price: sizePrices["12cmx12cm"],
          },
          {
            dimension: sizes["15cmx15cm"],
            price: sizePrices["15cmx15cm"],
          },
          {
            dimension: sizes["30cmx30cm"],
            price: sizePrices["30cmx130cm"],
          },
        ],
      },
      {
        shape: shapes[1],
        dimensions: [
          {
            dimension: sizes["10cmx10cm"],
            price: sizePrices["10cmx10cm"],
          },
          {
            dimension: sizes["12cmx12cm"],
            price: sizePrices["12cmx12cm"],
          },
          {
            dimension: sizes["15cmx15cm"],
            price: sizePrices["15cmx15cm"],
          },
          {
            dimension: sizes["30cmx30cm"],
            price: sizePrices["30cmx30cm"],
          },
        ],
      },
      {
        shape: shapes[2],
        dimensions: [
          {
            dimension: sizes["12cmx8cm"],
            price: sizePrices["12cmx8cm"],
          },
          {
            dimension: sizes["16cmx12cm"],
            price: sizePrices["20cmx16cm"],
          },
          {
            dimension: sizes["36cmx24cm"],
            price: sizePrices["36cmx24cm"],
          },
        ],
      },
      {
        shape: shapes[3],
        dimensions: [
          {
            dimension: sizes["12cmx8cm"],
            price: sizePrices["12cmx8cm"],
          },
          {
            dimension: sizes["16cmx12cm"],
            price: sizePrices["20cmx16cm"],
          },
          {
            dimension: sizes["36cmx24cm"],
            price: sizePrices["36cmx24cm"],
          },
        ],
      },
      {
        shape: shapes[4],
        dimensions: [
          {
            dimension: sizes["10cmx10cm"],
            price: sizePrices["10cmx10cm"],
          },
          {
            dimension: sizes["12cmx12cm"],
            price: sizePrices["12cmx12cm"],
          },
          {
            dimension: sizes["15cmx15cm"],
            price: sizePrices["15cmx15cm"],
          },
          {
            dimension: sizes["30cmx130cm"],
            price: sizePrices["30cmx130cm"],
          },
        ],
      },
    ],
  },

  {
    type: "custom",
    shapes: [
      {
        shape: shapes[0],
        dimensions: [
          {
            dimension: sizes["10cmx10cm"],
            price: sizePrices["10cmx10cm"],
          },
          {
            dimension: sizes["12cmx12cm"],
            price: sizePrices["12cmx12cm"],
          },
          {
            dimension: sizes["15cmx15cm"],
            price: sizePrices["15cmx15cm"],
          },
          {
            dimension: sizes["30cmx30cm"],
            price: sizePrices["30cmx130cm"],
          },
        ],
      },
      {
        shape: shapes[1],
        dimensions: [
          {
            dimension: sizes["10cmx10cm"],
            price: sizePrices["10cmx10cm"],
          },
          {
            dimension: sizes["12cmx12cm"],
            price: sizePrices["12cmx12cm"],
          },
          {
            dimension: sizes["15cmx15cm"],
            price: sizePrices["15cmx15cm"],
          },
          {
            dimension: sizes["30cmx30cm"],
            price: sizePrices["30cmx30cm"],
          },
        ],
      },
      {
        shape: shapes[2],
        dimensions: [
          {
            dimension: sizes["12cmx8cm"],
            price: sizePrices["12cmx8cm"],
          },
          {
            dimension: sizes["16cmx12cm"],
            price: sizePrices["20cmx16cm"],
          },
          {
            dimension: sizes["36cmx24cm"],
            price: sizePrices["36cmx24cm"],
          },
        ],
      },
      {
        shape: shapes[3],
        dimensions: [
          {
            dimension: sizes["12cmx8cm"],
            price: sizePrices["12cmx8cm"],
          },
          {
            dimension: sizes["16cmx12cm"],
            price: sizePrices["20cmx16cm"],
          },
          {
            dimension: sizes["36cmx24cm"],
            price: sizePrices["36cmx24cm"],
          },
        ],
      },
      {
        shape: shapes[4],
        dimensions: [
          {
            dimension: sizes["10cmx10cm"],
            price: sizePrices["10cmx10cm"],
          },
          {
            dimension: sizes["12cmx12cm"],
            price: sizePrices["12cmx12cm"],
          },
          {
            dimension: sizes["15cmx15cm"],
            price: sizePrices["15cmx15cm"],
          },
          {
            dimension: sizes["30cmx130cm"],
            price: sizePrices["30cmx130cm"],
          },
        ],
      },
    ],
  },

  {
    type: "car",
    shapes: [
      {
        shape: shapes[5],
        dimensions: [
          {
            dimension: sizes["30cmx30cm-car"],
            price: sizePrices["30cmx30cm-car"],
          },
          {
            dimension: sizes["40cmx40cm-car"],
            price: sizePrices["40cmx40cm-car"],
          },
          {
            dimension: sizes["50cmx50cm-car"],
            price: sizePrices["50cmx50cm-car"],
          },
          {
            dimension: sizes["40cmx25cm-car"],
            price: sizePrices["40cmx25cm-car"],
          },
          {
            dimension: sizes["60cmx30cm-car"],
            price: sizePrices["60cmx30cm-car"],
          },
          {
            dimension: sizes["80cmx35cm-car"],
            price: sizePrices["60cmx30cm-car"],
          },
        ],
      },
      {
        shape: shapes[6],
        dimensions: [
          {
            dimension: sizes["30cmx30cm-car"],
            price: sizePrices["30cmx30cm-car"],
          },
          {
            dimension: sizes["40cmx40cm-car"],
            price: sizePrices["40cmx40cm-car"],
          },
          {
            dimension: sizes["50cmx50cm-car"],
            price: sizePrices["50cmx50cm-car"],
          },
          {
            dimension: sizes["40cmx25cm-car"],
            price: sizePrices["40cmx25cm-car"],
          },
          {
            dimension: sizes["60cmx30cm-car"],
            price: sizePrices["60cmx30cm-car"],
          },
          {
            dimension: sizes["85cmx35cm-car"],
            price: sizePrices["60cmx30cm-car"],
          },
        ],
      },
      {
        shape: shapes[7],
        dimensions: [
          {
            dimension: sizes["30cmx30cm-car"],
            price: sizePrices["30cmx30cm-car"],
          },
          {
            dimension: sizes["40cmx40cm-car"],
            price: sizePrices["40cmx40cm-car"],
          },
          {
            dimension: sizes["50cmx50cm-car"],
            price: sizePrices["50cmx50cm-car"],
          },
          {
            dimension: sizes["40cmx25cm-car"],
            price: sizePrices["40cmx25cm-car"],
          },
          {
            dimension: sizes["60cmx30cm-car"],
            price: sizePrices["60cmx30cm-car"],
          },
          {
            dimension: sizes["85cmx35cm-car"],
            price: sizePrices["60cmx30cm-car"],
          },
        ],
      },
      {
        shape: shapes[8],
        dimensions: [
          {
            dimension: sizes["30cmx30cm-car"],
            price: sizePrices["30cmx30cm-car"],
          },
          {
            dimension: sizes["40cmx40cm-car"],
            price: sizePrices["40cmx40cm-car"],
          },
          {
            dimension: sizes["50cmx50cm-car"],
            price: sizePrices["50cmx50cm-car"],
          },
          {
            dimension: sizes["40cmx25cm-car"],
            price: sizePrices["40cmx25cm-car"],
          },
          {
            dimension: sizes["60cmx30cm-car"],
            price: sizePrices["60cmx30cm-car"],
          },
          {
            dimension: sizes["85cmx35cm-car"],
            price: sizePrices["60cmx30cm-car"],
          },
        ],
      },
    ],
  },
];

const magnetCategories = [
  "All",
  "valentines-magnets",
  "birthday-magnets",
  "mothers-day-magnets",
  "fathers-day-magnets",
  "fridge-reminders",
];

module.exports = {
  sizePrices,
  magnetCategories,
  shapes,
  sizePricesWithType,
};
