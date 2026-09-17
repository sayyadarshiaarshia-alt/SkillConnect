const express = require("express");
const Question = require("../models/question");

const router = express.Router();

/*
==================================================
SUBMIT TEST
Frontend sends:
{
  answers: [
    {
      questionId: "...",
      answer: "extends"
    }
  ]
}

Backend checks the correct answers.
Correct answers are NEVER sent to frontend.
==================================================
*/
router.post("/submit", async (req, res) => {
  try {
    const { answers } = req.body;

    if (!Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({
        message: "Answers are required",
      });
    }

    // Check duplicate question IDs
    const questionIds = answers.map((item) => item.questionId);

    const uniqueQuestionIds = new Set(questionIds);

    if (uniqueQuestionIds.size !== questionIds.length) {
      return res.status(400).json({
        message: "Duplicate questions are not allowed",
      });
    }

    // Get questions from MongoDB
    const questions = await Question.find({
      _id: { $in: questionIds },
    });

    if (questions.length !== answers.length) {
      return res.status(400).json({
        message: "One or more questions were not found",
      });
    }

    let correct = 0;

    const results = answers.map((item) => {
      const question = questions.find(
        (q) => q._id.toString() === item.questionId
      );

      const isCorrect =
        question &&
        question.correctAnswer === item.answer;

      if (isCorrect) {
        correct++;
      }

      return {
        questionId: item.questionId,
        correct: isCorrect,
        explanation: question?.explanation || "",
      };
    });

    const score = Math.round(
      (correct / questions.length) * 100
    );

    res.status(200).json({
      message: "Test submitted successfully",
      score,
      correct,
      total: questions.length,
      results,
    });
  } catch (error) {
    console.error("Error submitting test:", error);

    res.status(500).json({
      message: "Failed to submit test",
      error: error.message,
    });
  }
});


/*
==================================================
GET QUESTIONS FOR A SKILL
Example:
GET /api/questions/Java
==================================================
*/
router.get("/:skill", async (req, res) => {
  try {
    const skill = req.params.skill;

    const questions = await Question.find({
      skill: {
        $regex: `^${skill}$`,
        $options: "i",
      },
    }).select("-correctAnswer");

    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);

    res.status(500).json({
      message: "Failed to fetch questions",
      error: error.message,
    });
  }
});


/*
==================================================
ADD NEW QUESTION
==================================================
*/
router.post("/", async (req, res) => {
  try {
    const {
      skill,
      question,
      options,
      correctAnswer,
      difficulty,
      explanation,
    } = req.body;

    if (!skill || !question || !options || !correctAnswer) {
      return res.status(400).json({
        message:
          "Skill, question, options and correct answer are required",
      });
    }

    if (!Array.isArray(options) || options.length !== 4) {
      return res.status(400).json({
        message: "Exactly 4 options are required",
      });
    }

    if (!options.includes(correctAnswer)) {
      return res.status(400).json({
        message:
          "Correct answer must match one of the options",
      });
    }

    const newQuestion = new Question({
      skill,
      question,
      options,
      correctAnswer,
      difficulty: difficulty || "Medium",
      explanation: explanation || "",
    });

    const savedQuestion = await newQuestion.save();

    res.status(201).json({
      message: "Question added successfully",
      question: savedQuestion,
    });
  } catch (error) {
    console.error("Error adding question:", error);

    res.status(500).json({
      message: "Failed to add question",
      error: error.message,
    });
  }
});


module.exports = router;