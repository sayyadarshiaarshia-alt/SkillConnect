const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create User
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message
    });
  }
});

// Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message
    });
  }
});

// Get User by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch user",
      error: error.message
    });
  }
});

// Update User
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: "User updated successfully",
      user
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      error: error.message
    });
  }
});

// Delete User
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete user",
      error: error.message
    });
  }
});

module.exports = router;