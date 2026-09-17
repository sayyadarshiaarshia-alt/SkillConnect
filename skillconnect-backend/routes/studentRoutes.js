
const express = require("express");
const Student = require("../models/Student");

const router = express.Router();


// ==================================================
// REGISTER STUDENT
// POST /api/students/register
// ==================================================

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check whether email already exists
    const existingStudent = await Student.findOne({
      email: {
        $regex: `^${normalizedEmail}$`,
        $options: "i",
      },
    });

    if (existingStudent) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    // Create student
    const student = new Student({
      ...req.body,
      email: normalizedEmail,
    });

    await student.save();

    res.status(201).json({
      message: "Student registered successfully",
      student,
    });

  } catch (error) {
    console.error("REGISTRATION ERROR:", error);

    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
});


// ==================================================
// LOGIN STUDENT
// POST /api/students/login
// ==================================================

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password;

    console.log("LOGIN EMAIL:", email);

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Find student by email
    const student = await Student.findOne({
      email: {
        $regex: `^${email}$`,
        $options: "i",
      },
    });

    console.log(
      "FOUND STUDENT:",
      student ? student.email : "No student found"
    );

    // Student does not exist
    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    // Check password
    if (student.password !== password) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    // Login successful
    res.status(200).json({
      message: "Login successful",
      student,
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);

    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
});


// ==================================================
// SAVE / UPDATE DASHBOARD DATA
// PUT /api/students/:id
// ==================================================

router.put("/:id", async (req, res) => {
  try {
    const { skills, targetJob } = req.body;

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        skills,
        targetJob,
      },
      {
        new: true,
      }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Dashboard data saved successfully",
      student,
    });

  } catch (error) {
    console.error("UPDATE ERROR:", error);

    res.status(500).json({
      message: "Failed to save dashboard data",
      error: error.message,
    });
  }
});


// ==================================================
// GET ALL STUDENTS
// GET /api/students
// ==================================================

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);

  } catch (error) {
    console.error("GET STUDENTS ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch students",
      error: error.message,
    });
  }
});


module.exports = router;
