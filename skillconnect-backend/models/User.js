const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    selectedSkills: {
      type: [String],
      default: []
    },

    selfRatings: {
      type: Map,
      of: Number,
      default: {}
    },

    targetJob: {
      type: String,
      default: ""
    },

    testScores: {
      type: Map,
      of: Number,
      default: {}
    },

    initialReadiness: {
      type: Number,
      default: 0
    },

    learningCompleted: {
      type: [String],
      default: []
    },

    retestScores: {
      type: Map,
      of: Number,
      default: {}
    },

    finalReadiness: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);