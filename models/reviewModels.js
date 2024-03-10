const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
