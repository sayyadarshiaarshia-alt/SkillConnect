const mongoose = require("mongoose");
require("dotenv").config();

const Question = require("./question");

const questions = [
  {
    skill: "Java",
    question: "Which keyword is used to inherit a class in Java?",
    options: [
      "implements",
      "extends",
      "inherits",
      "super"
    ],
    correctAnswer: "extends",
    difficulty: "Easy",
    explanation:
      "The extends keyword is used when one class inherits another class."
  },

  {
    skill: "Java",
    question: "Which keyword is used to create an object in Java?",
    options: [
      "class",
      "new",
      "object",
      "create"
    ],
    correctAnswer: "new",
    difficulty: "Easy",
    explanation:
      "The new keyword is used to create an object of a class."
  },

  {
    skill: "Java",
    question: "What is the default value of an int instance variable in Java?",
    options: [
      "0",
      "1",
      "null",
      "undefined"
    ],
    correctAnswer: "0",
    difficulty: "Easy",
    explanation:
      "An int instance variable has a default value of 0."
  },

  {
    skill: "Java",
    question:
      "Which concept allows multiple methods with the same name but different parameters?",
    options: [
      "Inheritance",
      "Encapsulation",
      "Method Overloading",
      "Abstraction"
    ],
    correctAnswer: "Method Overloading",
    difficulty: "Medium",
    explanation:
      "Method overloading allows methods to have the same name with different parameter lists."
  },

  {
    skill: "Java",
    question: "Which collection does not allow duplicate elements?",
    options: [
      "ArrayList",
      "LinkedList",
      "HashSet",
      "Vector"
    ],
    correctAnswer: "HashSet",
    difficulty: "Medium",
    explanation:
      "HashSet stores unique elements and does not allow duplicates."
  },

  {
    skill: "Java",
    question:
      "Which keyword prevents a method from being overridden?",
    options: [
      "static",
      "final",
      "private",
      "const"
    ],
    correctAnswer: "final",
    difficulty: "Medium",
    explanation:
      "A final method cannot be overridden by a subclass."
  },

  {
    skill: "Java",
    question:
      "Which exception occurs when an integer is divided by zero?",
    options: [
      "NullPointerException",
      "ArithmeticException",
      "IOException",
      "NumberFormatException"
    ],
    correctAnswer: "ArithmeticException",
    difficulty: "Medium",
    explanation:
      "Integer division by zero causes ArithmeticException."
  },

  {
    skill: "Java",
    question:
      "Which interface is commonly used for custom sorting of objects?",
    options: [
      "Runnable",
      "Serializable",
      "Comparator",
      "Cloneable"
    ],
    correctAnswer: "Comparator",
    difficulty: "Hard",
    explanation:
      "Comparator is used to define custom ordering of objects."
  }
];

async function seedQuestions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Question.deleteMany({});

    await Question.insertMany(questions);

    console.log(
      `${questions.length} questions inserted successfully`
    );

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("Error inserting questions:");
    console.error(error);

    process.exit(1);
  }
}

seedQuestions();