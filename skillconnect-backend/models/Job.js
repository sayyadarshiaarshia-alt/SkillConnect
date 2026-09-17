const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    company: {
      type: String,
      default: ""
    },

    location: {
      type: String,
      default: ""
    },

    requiredSkills: {
      type: Map,
      of: Number,
      default: {}
    },

    description: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Job", jobSchema);