const express = require("express");
const Skill = require("../models/Skill");

const router = express.Router();

// Add Skill
router.post("/", async (req, res) => {
  try {
    const skill = new Skill(req.body);
    const savedSkill = await skill.save();

    res.status(201).json({
      message: "Skill added successfully",
      skill: savedSkill
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add skill",
      error: error.message
    });
  }
});

// Get All Skills
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch skills",
      error: error.message
    });
  }
});

module.exports = router;