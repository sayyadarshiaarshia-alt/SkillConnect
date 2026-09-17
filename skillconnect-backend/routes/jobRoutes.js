const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

// Add Job
router.post("/", async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();

    res.status(201).json({
      message: "Job added successfully",
      job: savedJob
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add job",
      error: error.message
    });
  }
});

// Get All Jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch jobs",
      error: error.message
    });
  }
});

// Get Job by ID
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch job",
      error: error.message
    });
  }
});

module.exports = router;