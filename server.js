const express = require("express"); // Creating express application using express package
const app = express(); // Storing the application in app variable
const cors = require("cors"); // "CORS" middleware to enable CORS

const mongoose = require("mongoose"); // Creating mongoose varible using mongoose package

app.use(express.json()); // Convincing the app to understand JSON.
app.use(express.urlencoded({ extended: false })); // Defining the use of middleware function
app.use(cors()); // Enabling CORS for all routes

const Product = require("./models/productModels"); // Importing the product model.
const Review = require("./models/reviewModels"); // Importing the review model.
const EmployeeSignUp = require("./models/employeeSignupModel"); // Importing the employeeSignup model.

//Routes
//Routes for Employee-singup collection.

//Method to save employee signup details in the database.
app.post("/employeesignup", async (req, res) => {
  try {
    const employeeSignup = await EmployeeSignUp.create(req.body);
    res.status(200).json(employeeSignup);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Method to retrieve employee signup details from the database.
app.get("/employeesignup", async (req, res) => {
  try {
    const employeeSignup = await EmployeeSignUp.find({});
    res.status(200).json(employeeSignup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Method to update employee signup details in the database.
app.put("/employeesignup/:id", async (req, res) => {
  try {
    const { id } = req.params; // Detructuring the request to get ID
    const employeeSignup = await EmployeeSignUp.findByIdAndUpdate(id, req.body);
    if (!employeeSignup) {
      // If we cannot find any product matching the ID in database.
      return res
        .status(404)
        .json({ message: `Cannot find any review with ID ${id}` });
    }
    const updatedEmployeeSignUp = await EmployeeSignUp.findById(id);
    res.status(200).json(updatedEmployeeSignUp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Method to delete employee signup details.
app.delete("/employeesignup/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employeeSignup = await EmployeeSignUp.findByIdAndDelete(id);
    if (!employeeSignup) {
      return res.status(404).json({
        message: `cannot find any Employee sign up details with ID ${id}`,
      });
    }
    res.status(200).json(employeeSignup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Routes for review collection

//Method to save reviews in the database.
app.post("/reviews", async (req, res) => {
  try {
    const reviews = await Review.create(req.body);
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Method to retrieve reviews from the database.
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Method to update a review in the database.
app.put("/reviews/:id", async (req, res) => {
  try {
    const { id } = req.params; // Detructuring the request to get ID
    const review = await Review.findByIdAndUpdate(id, req.body);
    if (!review) {
      // If we cannot find any product matching the ID in database.
      return res
        .status(404)
        .json({ message: `Cannot find any review with ID ${id}` });
    }
    const updatedReview = await Review.findById(id);
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Method to delete a review.
app.delete("/reviews/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByIdAndDelete(id);
    if (!review) {
      return res
        .status(404)
        .json({ message: `cannot find any review with ID ${id}` });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Routes for products collection
// Method to save products in the database.
app.post("/addProduct", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Method to retrieve products from the database.
app.get("/getProducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Method to update a product in the database.
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params; // Detructuring the request to get ID
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      // If we cannot find any product matching the ID in database.
      return res
        .status(404)
        .json({ message: `Cannot find any product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Method to delete a product.
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose.set("strictQuery", false); // Setting Strict Query to false for relaxed schema queries.

mongoose
  .connect(
    // Connecting Node application to mongoDB database
    "mongodb+srv://ralph20221856:akureta1324@akureta.ey2l0gw.mongodb.net/Node-API-Akureta?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
      // Defining thre app to focus on localhost-3000.
      console.log("Node API is running for Akureta in port 4000");
    });
    console.log("Connected to MongoDB - Akureta");
  })
  .catch((error) => {
    console.log(error);
  });


