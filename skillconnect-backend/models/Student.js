const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],
      default: [],
    },

    targetJob: {
      type: String,
      default: "",
    },

    selfRatings: {
      type: Object,
      default: {},
    },

    testScores: {
      type: Object,
      default: {},
    },

    finalScores: {
      type: Object,
      default: {},
    },

    jobReadiness: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);