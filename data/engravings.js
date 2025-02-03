const engravingCategories = ["all", "works-of-art", "merchandise", "branding"];

const phoneVariations = {
  11: "11",
  "11Pro": "11Pro",
  "11ProMax": "11ProMax",
  12: "12",
  "12Pro": "12Pro",
  "12ProMax": "12ProMax",
  13: "13",
  "13Pro": "13Pro",
  "13ProMax": "13ProMax",
  14: "14",
  "14Pro": "14Pro",
  "14ProMax": "14ProMax",
  15: "15",
  "15Pro": "15Pro",
  "15ProMax": "15ProMax",
  16: "16",
  "16Pro": "16Pro",
  "16ProMax": "16ProMax",
};

const prices = {
  11: 2000,
  "11Pro": 2000,
  "11ProMax": 2000,
  12: 2000,
  "12Pro": 2000,
  "12ProMax": 2000,
  13: 2000,
  "13Pro": 2000,
  "13ProMax": 2000,
  14: 2000,
  "14Pro": 2000,
  "14ProMax": 2000,
  15: 2000,
  "15Pro": 2000,
  "15ProMax": 2000,
  16: 2000,
  "16Pro": 2000,
  "16ProMax": 2000,
};

const walletVariants = {
  "10cmx7cm": "10cmx7cm",
};

const walletPrices = {
  "10cmx7cm": 5000,
};

const engravedMerchProductTypes = [
  {
    type: "phone-case",
    subTypes: [
      {
        subType: "leather",
        variants: [
          {
            variant: phoneVariations["11"],
            price: prices["11"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["11Pro"],
            price: prices["11Pro"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["11ProMax"],
            price: prices["11ProMax"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["12"],
            price: prices["12"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["12Pro"],
            price: prices["12Pro"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["12ProMax"],
            price: prices["12ProMax"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["13"],
            price: prices["13"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["13Pro"],
            price: prices["13Pro"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["13ProMax"],
            price: prices["13ProMax"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["14"],
            price: prices["14"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["14Pro"],
            price: prices["14Pro"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["14ProMax"],
            price: prices["14ProMax"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["15"],
            price: prices["15"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["15Pro"],
            price: prices["15Pro"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["15ProMax"],
            price: prices["15ProMax"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["16"],
            price: prices["16"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["16Pro"],
            price: prices["16Pro"],
            color: ["red", "yellow", "green"],
          },
          {
            variant: phoneVariations["16ProMax"],
            price: prices["16ProMax"],
            color: ["red", "yellow", "green"],
          },
        ],
      },
      {
        subType: "wooden",
        variants: [
          {
            variant: phoneVariations["11"],
            price: prices["11"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["11Pro"],
            price: prices["11Pro"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["11ProMax"],
            price: prices["11ProMax"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["12"],
            price: prices["12"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["12Pro"],
            price: prices["12Pro"],

            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["12ProMax"],
            price: prices["12ProMax"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["13"],
            price: prices["13"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["13Pro"],
            price: prices["13Pro"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["13ProMax"],
            price: prices["13ProMax"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["14"],
            price: prices["14"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["14Pro"],
            price: prices["14Pro"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["14ProMax"],
            price: prices["14ProMax"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["15"],
            price: prices["15"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["15Pro"],
            price: prices["15Pro"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["15ProMax"],
            price: prices["15ProMax"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["16"],
            price: prices["16"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["16Pro"],
            price: prices["16Pro"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
          {
            variant: phoneVariations["16ProMax"],
            price: prices["16ProMax"],
            color: [
              "american-wallnut",
              "italian-wallnut",
              "european-wallnut",
              "maple",
              "oak-grey",
              "oak",
              "sapele",
            ],
          },
        ],
      },
    ],
  },
  {
    type: "card-holders",
    subTypes: [
      {
        subType: "leather",
        variants: [
          {
            variant: walletVariants["10cmx7cm"],
            price: walletPrices["10cmx7cm"],
          },
        ],
      },
      {
        subType: "metal",
        variants: [
          {
            variant: walletVariants["10cmx7cm"],
            price: walletPrices["10cmx7cm"],
          },
        ],
      },
    ],
  },
];

module.exports = { engravingCategories, engravedMerchProductTypes };
