const mongoose = require("mongoose"); // Importing mongoose package

const employeeSingupSchema = mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  employeeAge: {
    type: Number,
    required: true,
  },
  employeeGender: {
    type: String,
    required: true,
  },
  aboutEmployee: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  employeeUsername: {
    type: String,
    required: true,
  },
  employeePassword: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
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
});

const EmployeeSignUp = mongoose.model("employeeSingup", employeeSingupSchema);
module.exports = EmployeeSignUp;
