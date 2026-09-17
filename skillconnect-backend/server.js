const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Routes
const studentRoutes = require("./routes/studentRoutes");
const questionRoutes = require("./routes/questionRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Student routes
app.use("/api/students", studentRoutes);

// Question routes
app.use("/api/questions", questionRoutes);

console.log("Student routes loaded");
console.log("Question routes loaded");

// Test API
app.get("/api/test", (req, res) => {
  res.json({
    message: "API is working",
  });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Atlas connected successfully");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error);
  });