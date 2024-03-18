const mongoose = require("mongoose"); // Importing mongoose package

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    aboutProduct: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },

    category: {
      type: String,
      required: false,
    },

    rating: {
      type: Number,
      required: false,
      default: 0,
    },

    totalReviews: {
      type: Number,
      required: false,
    },
  
    totalNegativeReviews: {
      type: Number,
      required: false,
    },
  
    totalPositiveReviews: {
      type: Number,
      required: false,
    }
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
