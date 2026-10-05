import React, { useState } from "react";
import "./Dashboard.css";

/* =====================================================
   SKILLS
===================================================== */

const skills = [
  "Java",
  "Python",
  "React",
  "JavaScript",
  "SQL",
  "Node.js",
  "Spring Boot",
  "Git",
  "Communication",
];

/* =====================================================
   JOB REQUIREMENTS
===================================================== */

const jobs = {
  "Java Developer": {
    Java: 80,
    SQL: 70,
    "Spring Boot": 75,
    Git: 60,
    Communication: 70,
  },

  "Frontend Developer": {
    React: 80,
    JavaScript: 80,
    Git: 60,
    Communication: 70,
  },

  "Full Stack Developer": {
    React: 75,
    JavaScript: 75,
    "Node.js": 75,
    SQL: 70,
    Git: 60,
  },

  "Python Developer": {
    Python: 80,
    SQL: 70,
    Git: 60,
    Communication: 70,
  },
};

/* =====================================================
   PERSONALIZED LEARNING CONTENT
===================================================== */

const learningContent = {
  Java: {
    modules: [
      {
        title: "Java OOP Fundamentals",
        content: [
          "Classes and Objects",
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
        ],
        assessment: [
          {
            q: "Which OOP concept hides internal implementation details?",
            options: [
              "Inheritance",
              "Encapsulation",
              "Overloading",
              "Casting",
            ],
            answer: "Encapsulation",
          },
          {
            q: "Which concept allows a child class to reuse parent properties?",
            options: [
              "Inheritance",
              "Abstraction",
              "Compilation",
              "Parsing",
            ],
            answer: "Inheritance",
          },
        ],
      },

      {
        title: "Java Collections",
        content: [
          "List interface",
          "Set interface",
          "Map interface",
          "Choosing the correct collection",
        ],
        assessment: [
          {
            q: "Which collection stores unique elements?",
            options: ["List", "Set", "Array", "Queue"],
            answer: "Set",
          },
          {
            q: "Which collection stores key-value pairs?",
            options: [
              "ArrayList",
              "HashSet",
              "HashMap",
              "Stack",
            ],
            answer: "HashMap",
          },
        ],
      },
    ],
  },

  Python: {
    modules: [
      {
        title: "Python Fundamentals",
        content: [
          "Variables and Data Types",
          "Conditions",
          "Loops",
          "Functions",
        ],
        assessment: [
          {
            q: "Which keyword defines a function?",
            options: ["function", "def", "fun", "method"],
            answer: "def",
          },
          {
            q: "Which data type stores key-value pairs?",
            options: [
              "List",
              "Tuple",
              "Dictionary",
              "String",
            ],
            answer: "Dictionary",
          },
        ],
      },
    ],
  },

  React: {
    modules: [
      {
        title: "React Fundamentals",
        content: [
          "Components",
          "JSX",
          "Props",
          "State",
        ],
        assessment: [
          {
            q: "Which hook is used for component state?",
            options: [
              "useState",
              "useData",
              "useComponent",
              "useValue",
            ],
            answer: "useState",
          },
          {
            q: "What is JSX?",
            options: [
              "JavaScript syntax extension",
              "Database",
              "Backend framework",
              "CSS library",
            ],
            answer: "JavaScript syntax extension",
          },
        ],
      },

      {
        title: "React State and Events",
        content: [
          "Event handling",
          "State updates",
          "Conditional rendering",
          "Form handling",
        ],
        assessment: [
          {
            q: "Which function is commonly used to update useState data?",
            options: [
              "setStateValue",
              "setValue",
              "updateStateOnly",
              "change",
            ],
            answer: "setValue",
          },
          {
            q: "React event handlers commonly use which naming style?",
            options: [
              "camelCase",
              "snake_case",
              "UPPERCASE",
              "dash-case",
            ],
            answer: "camelCase",
          },
        ],
      },
    ],
  },

  JavaScript: {
    modules: [
      {
        title: "JavaScript Fundamentals",
        content: [
          "Variables",
          "Functions",
          "Arrays",
          "Objects",
        ],
        assessment: [
          {
            q: "Which declaration is block scoped?",
            options: [
              "var",
              "let",
              "global",
              "define",
            ],
            answer: "let",
          },
          {
            q: "Which operator checks both value and type?",
            options: [
              "=",
              "==",
              "===",
              "!=",
            ],
            answer: "===",
          },
        ],
      },
    ],
  },

  SQL: {
    modules: [
      {
        title: "SQL Fundamentals",
        content: [
          "SELECT",
          "WHERE",
          "ORDER BY",
          "GROUP BY",
        ],
        assessment: [
          {
            q: "Which clause filters records?",
            options: [
              "GROUP BY",
              "WHERE",
              "ORDER BY",
              "SELECT",
            ],
            answer: "WHERE",
          },
          {
            q: "Which command retrieves data?",
            options: [
              "SELECT",
              "GET",
              "READ",
              "OPEN",
            ],
            answer: "SELECT",
          },
        ],
      },
    ],
  },

  "Node.js": {
    modules: [
      {
        title: "Node.js Backend Fundamentals",
        content: [
          "Node.js Runtime",
          "Modules",
          "HTTP Server",
          "npm and package.json",
        ],
        assessment: [
          {
            q: "Which engine powers Node.js?",
            options: [
              "V8",
              "JavaVM",
              "Spider",
              "Chakra",
            ],
            answer: "V8",
          },
          {
            q: "Which file manages Node.js dependencies?",
            options: [
              "node.json",
              "package.json",
              "server.json",
              "app.json",
            ],
            answer: "package.json",
          },
        ],
      },
    ],
  },

  "Spring Boot": {
    modules: [
      {
        title: "Spring Boot REST APIs",
        content: [
          "Spring Boot Basics",
          "REST Controllers",
          "GET and POST APIs",
          "Request Mapping",
        ],
        assessment: [
          {
            q: "Which annotation creates a REST controller?",
            options: [
              "@RestController",
              "@ControllerOnly",
              "@REST",
              "@APIController",
            ],
            answer: "@RestController",
          },
          {
            q: "Which annotation maps GET requests?",
            options: [
              "@GetMapping",
              "@Read",
              "@Fetch",
              "@Get",
            ],
            answer: "@GetMapping",
          },
        ],
      },
    ],
  },

  Git: {
    modules: [
      {
        title: "Git and GitHub",
        content: [
          "Repository",
          "Commit",
          "Branch",
          "Push and Pull",
        ],
        assessment: [
          {
            q: "Which command initializes a Git repository?",
            options: [
              "git start",
              "git init",
              "git create",
              "git repo",
            ],
            answer: "git init",
          },
          {
            q: "Which command sends commits to GitHub?",
            options: [
              "git send",
              "git upload",
              "git push",
              "git transfer",
            ],
            answer: "git push",
          },
        ],
      },
    ],
  },

  Communication: {
    modules: [
      {
        title: "Professional Communication",
        content: [
          "Self Introduction",
          "Technical Explanation",
          "Interview Communication",
          "Structured Answers",
        ],
        assessment: [
          {
            q: "What makes an interview answer effective?",
            options: [
              "Clear and structured explanation",
              "Very long answer",
              "Difficult vocabulary",
              "Avoiding examples",
            ],
            answer: "Clear and structured explanation",
          },
          {
            q: "What should you do when you do not know an answer?",
            options: [
              "Make up an answer",
              "Explain your understanding honestly",
              "Ignore the interviewer",
              "Change the topic",
            ],
            answer: "Explain your understanding honestly",
          },
        ],
      },
    ],
  },
};

/* =====================================================
   DASHBOARD
===================================================== */

function Dashboard({ student }) {
  /* ===================================================
     PROFILE
  =================================================== */

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [ratings, setRatings] = useState({});
  const [targetJob, setTargetJob] = useState("");

  /* ===================================================
     BACKEND QUESTIONS
  =================================================== */

  const [backendQuestions, setBackendQuestions] =
    useState({});

  const [loadingQuestions, setLoadingQuestions] =
    useState(false);

  const [questionError, setQuestionError] =
    useState("");

  /* ===================================================
     INITIAL TEST
  =================================================== */

  const [testAnswers, setTestAnswers] = useState({});
  const [testScores, setTestScores] = useState({});
  const [testSkillIndex, setTestSkillIndex] =
    useState(0);
  const [testQuestionIndex, setTestQuestionIndex] =
    useState(0);
  const [testStarted, setTestStarted] =
    useState(false);
  const [testCompleted, setTestCompleted] =
    useState(false);

  /* ===================================================
     LEARNING
  =================================================== */

  const [assessmentAnswers, setAssessmentAnswers] =
    useState({});

  const [assessmentScores, setAssessmentScores] =
    useState({});

  const [assessmentCompleted, setAssessmentCompleted] =
    useState({});

  /* ===================================================
     RETEST
  =================================================== */

  const [retestAnswers, setRetestAnswers] =
    useState({});

  const [retestScores, setRetestScores] =
    useState({});

  const [retestSkillIndex, setRetestSkillIndex] =
    useState(0);

  const [retestQuestionIndex, setRetestQuestionIndex] =
    useState(0);

  const [retestStarted, setRetestStarted] =
    useState(false);

  const [retestCompleted, setRetestCompleted] =
    useState(false);

  /* ===================================================
     REQUIRED SKILLS
  =================================================== */

  const requiredSkills =
    targetJob ? jobs[targetJob] : {};

  /* ===================================================
     SKILL SELECTION
  =================================================== */

  const toggleSkill = (skill) => {
    setSelectedSkills((previous) => {
      if (previous.includes(skill)) {
        return previous.filter(
          (item) => item !== skill
        );
      }

      return [...previous, skill];
    });
  };

  /* ===================================================
     SELF RATING
  =================================================== */

  const updateRating = (skill, level) => {
    const percentage = {
      Beginner: 25,
      Intermediate: 50,
      Advanced: 75,
      Expert: 100,
    };

    setRatings((previous) => ({
      ...previous,
      [skill]: {
        level,
        percentage: percentage[level],
      },
    }));
  };

  /* ===================================================
     SAVE STUDENT PROGRESS
  =================================================== */

  const saveProgress = async () => {
    if (!student?._id) {
      return;
    }

    try {
      const response = await fetch(
        `https://skillconnect-backend-gj66.onrender.com/api/students/${student._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skills: selectedSkills,
            targetJob,
          }),
        }
      );

      if (!response.ok) {
        console.log(
          "Student progress was not saved."
        );
      }
    } catch (error) {
      console.log(
        "Save failed:",
        error
      );
    }
  };

  /* ===================================================
     LOAD QUESTIONS FROM BACKEND
  =================================================== */

  const loadQuestions = async () => {
    const loadedQuestions = {};

    for (const skill of selectedSkills) {
      const response = await fetch(
        `https://skillconnect-backend-gj66.onrender.com/api/questions/${encodeURIComponent(
          skill
        )}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to load questions for ${skill}`
        );
      }

      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error(
          `No questions available for ${skill}`
        );
      }

      loadedQuestions[skill] = data;
    }

    return loadedQuestions;
  };

  /* ===================================================
     START TEST
  =================================================== */

  const startSkillTest = async () => {
    if (selectedSkills.length === 0) {
      alert(
        "Please select at least one skill."
      );
      return;
    }

    if (!targetJob) {
      alert(
        "Please select a target job."
      );
      return;
    }

    for (const skill of selectedSkills) {
      if (!ratings[skill]) {
        alert(
          `Please select self rating for ${skill}.`
        );
        return;
      }
    }

    try {
      setLoadingQuestions(true);
      setQuestionError("");

      const loadedQuestions =
        await loadQuestions();

      setBackendQuestions(
        loadedQuestions
      );

      await saveProgress();

      setTestAnswers({});
      setTestScores({});
      setTestSkillIndex(0);
      setTestQuestionIndex(0);
      setTestStarted(true);
      setTestCompleted(false);

      setRetestAnswers({});
      setRetestScores({});
      setRetestStarted(false);
      setRetestCompleted(false);

      setAssessmentAnswers({});
      setAssessmentScores({});
      setAssessmentCompleted({});
    } catch (error) {
      console.error(
        "Question loading failed:",
        error
      );

      setQuestionError(
        error.message ||
          "Failed to load skill test."
      );

      alert(
        "Unable to load the skill test. Please make sure the backend is running and questions are available."
      );
    } finally {
      setLoadingQuestions(false);
    }
  };

  /* ===================================================
     ACTIVE TEST QUESTION
  =================================================== */

  const activeTestSkill =
    selectedSkills[testSkillIndex];

  const activeTestQuestions =
    backendQuestions[activeTestSkill] || [];

  const activeTestQuestion =
    activeTestQuestions[testQuestionIndex];

  /* ===================================================
     CHOOSE TEST ANSWER
  =================================================== */

  const chooseTestAnswer = (answer) => {
    setTestAnswers((previous) => ({
      ...previous,
      [`${activeTestSkill}-${testQuestionIndex}`]:
        answer,
    }));
  };

  /* ===================================================
     SUBMIT CURRENT SKILL TEST
     BACKEND EVALUATES ANSWERS
  =================================================== */

  const finishCurrentSkillTest =
    async () => {
      const skill = activeTestSkill;

      const skillQuestions =
        backendQuestions[skill] || [];

      if (skillQuestions.length === 0) {
        alert(
          `No questions available for ${skill}.`
        );
        return;
      }

      const answers = [];

      for (
        let i = 0;
        i < skillQuestions.length;
        i++
      ) {
        const selected =
          testAnswers[
            `${skill}-${i}`
          ];

        if (!selected) {
          alert(
            "Please answer all questions."
          );
          return;
        }

        answers.push({
          questionId:
            skillQuestions[i]._id,
          answer: selected,
        });
      }

      try {
        const response = await fetch(
          "https://skillconnect-backend-gj66.onrender.com/api/questions/submit",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              answers,
            }),
          }
        );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result.message ||
              "Failed to evaluate test"
          );
        }

        const updatedScores = {
          ...testScores,
          [skill]: result.score,
        };

        setTestScores(
          updatedScores
        );

        if (
          testSkillIndex <
          selectedSkills.length - 1
        ) {
          setTestSkillIndex(
            (previous) =>
              previous + 1
          );

          setTestQuestionIndex(0);
        } else {
          setTestStarted(false);
          setTestCompleted(true);
        }
      } catch (error) {
        console.error(
          "Test submission failed:",
          error
        );

        alert(
          "Unable to calculate the test score. Please try again."
        );
      }
    };

  /* ===================================================
     NEXT TEST QUESTION
  =================================================== */

  const nextTestQuestion = () => {
    if (
      !testAnswers[
        `${activeTestSkill}-${testQuestionIndex}`
      ]
    ) {
      alert(
        "Please select an answer."
      );
      return;
    }

    if (
      testQuestionIndex <
      activeTestQuestions.length - 1
    ) {
      setTestQuestionIndex(
        (previous) =>
          previous + 1
      );
    } else {
      finishCurrentSkillTest();
    }
  };

  /* ===================================================
     READINESS CALCULATION
  =================================================== */

  const calculateReadiness =
    (scoreData) => {
      if (!targetJob) {
        return 0;
      }

      const entries =
        Object.entries(
          requiredSkills
        );

      if (entries.length === 0) {
        return 0;
      }

      let total = 0;

      entries.forEach(
        ([skill, required]) => {
          const score =
            selectedSkills.includes(skill)
              ? Number(
                  scoreData[skill] || 0
                )
              : 0;

          const contribution =
            Math.min(
              (score / required) * 100,
              100
            );

          total += contribution;
        }
      );

      return Math.round(
        total / entries.length
      );
    };

  const initialReadiness =
    testCompleted
      ? calculateReadiness(
          testScores
        )
      : 0;

  /* ===================================================
     INITIAL GAP ANALYSIS
  =================================================== */

  const gapAnalysis =
    testCompleted
      ? Object.entries(
          requiredSkills
        ).map(
          ([skill, required]) => {
            const selected =
              selectedSkills.includes(
                skill
              );

            const score = selected
              ? Number(
                  testScores[
                    skill
                  ] || 0
                )
              : 0;

            let status =
              "Missing Skill";

            if (
              selected &&
              score >= required
            ) {
              status =
                "Job Ready";
            } else if (selected) {
              status =
                "Needs Improvement";
            }

            return {
              skill,
              required,
              score,
              status,
            };
          }
        )
      : [];

  /* ===================================================
     LEARNING SKILLS
  =================================================== */

  const learningSkills =
    gapAnalysis
      .filter(
        (item) =>
          item.status ===
          "Needs Improvement"
      )
      .map(
        (item) =>
          item.skill
      );

  /* ===================================================
     LEARNING HELPERS
  =================================================== */

  const getModules = (skill) =>
    learningContent[skill]
      ?.modules || [];

  const learningKey = (
    skill,
    moduleIndex
  ) =>
    `${skill}-${moduleIndex}`;

  const isSkillLearningComplete =
    (skill) => {
      const modules =
        getModules(skill);

      if (
        modules.length === 0
      ) {
        return true;
      }

      return modules.every(
        (_, index) =>
          assessmentCompleted[
            learningKey(
              skill,
              index
            )
          ] === true
      );
    };

  const allLearningComplete =
    learningSkills.length === 0 ||
    learningSkills.every(
      (skill) =>
        isSkillLearningComplete(
          skill
        )
    );

  /* ===================================================
     ASSESSMENT ANSWER
  =================================================== */

  const chooseAssessmentAnswer = (
    skill,
    moduleIndex,
    questionIndex,
    answer
  ) => {
    setAssessmentAnswers(
      (previous) => ({
        ...previous,
        [`${skill}-${moduleIndex}-${questionIndex}`]:
          answer,
      })
    );
  };

  /* ===================================================
     SUBMIT ASSESSMENT
  =================================================== */

  const submitAssessment = (
    skill,
    moduleIndex
  ) => {
    const module =
      getModules(skill)[
        moduleIndex
      ];

    if (!module) {
      return;
    }

    let correct = 0;

    for (
      let i = 0;
      i <
      module.assessment.length;
      i++
    ) {
      const answer =
        assessmentAnswers[
          `${skill}-${moduleIndex}-${i}`
        ];

      if (!answer) {
        alert(
          "Please answer all assessment questions."
        );
        return;
      }

      if (
        answer ===
        module.assessment[i]
          .answer
      ) {
        correct++;
      }
    }

    const score =
      Math.round(
        (correct /
          module.assessment.length) *
          100
      );

    const key =
      learningKey(
        skill,
        moduleIndex
      );

    setAssessmentScores(
      (previous) => ({
        ...previous,
        [key]: score,
      })
    );

    if (score >= 70) {
      setAssessmentCompleted(
        (previous) => ({
          ...previous,
          [key]: true,
        })
      );

      alert(
        `${module.title} passed with ${score}%`
      );
    } else {
      setAssessmentCompleted(
        (previous) => ({
          ...previous,
          [key]: false,
        })
      );

      alert(
        `${module.title}: ${score}%\n70% is required to pass.`
      );
    }
  };

  /* ===================================================
     START RETEST
  =================================================== */

  const startRetest = () => {
    if (
      learningSkills.length === 0
    ) {
      alert(
        "No re-test is required because all selected required skills are already ready."
      );
      return;
    }

    if (!allLearningComplete) {
      alert(
        "Please complete all learning modules and assessments first."
      );
      return;
    }

    setRetestAnswers({});
    setRetestScores({});
    setRetestSkillIndex(0);
    setRetestQuestionIndex(0);
    setRetestStarted(true);
    setRetestCompleted(false);
  };

  /* ===================================================
     ACTIVE RETEST QUESTION
  =================================================== */

  const activeRetestSkill =
    learningSkills[
      retestSkillIndex
    ];

  const activeRetestQuestions =
    backendQuestions[
      activeRetestSkill
    ] || [];

  const activeRetestQuestion =
    activeRetestQuestions[
      retestQuestionIndex
    ];

  /* ===================================================
     RETEST ANSWER
  =================================================== */

  const chooseRetestAnswer =
    (answer) => {
      setRetestAnswers(
        (previous) => ({
          ...previous,
          [`${activeRetestSkill}-${retestQuestionIndex}`]:
            answer,
        })
      );
    };

  /* ===================================================
     SUBMIT RETEST TO BACKEND
  =================================================== */

  const finishCurrentRetest =
    async () => {
      const skill =
        activeRetestSkill;

      const skillQuestions =
        backendQuestions[
          skill
        ] || [];

      if (
        skillQuestions.length ===
        0
      ) {
        alert(
          `No questions available for ${skill}.`
        );
        return;
      }

      const answers = [];

      for (
        let i = 0;
        i < skillQuestions.length;
        i++
      ) {
        const answer =
          retestAnswers[
            `${skill}-${i}`
          ];

        if (!answer) {
          alert(
            "Please answer all questions."
          );
          return;
        }

        answers.push({
          questionId:
            skillQuestions[i]._id,
          answer,
        });
      }

      try {
        const response =
          await fetch(
            "https://skillconnect-backend-gj66.onrender.com/api/questions/submit",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                answers,
              }),
            }
          );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result.message ||
              "Failed to evaluate re-test"
          );
        }

        const updatedRetestScores =
          {
            ...retestScores,
            [skill]:
              result.score,
          };

        setRetestScores(
          updatedRetestScores
        );

        if (
          retestSkillIndex <
          learningSkills.length - 1
        ) {
          setRetestSkillIndex(
            (previous) =>
              previous + 1
          );

          setRetestQuestionIndex(
            0
          );
        } else {
          setRetestStarted(false);
          setRetestCompleted(true);
        }
      } catch (error) {
        console.error(
          "Retest submission failed:",
          error
        );

        alert(
          "Unable to calculate the re-test score."
        );
      }
    };

  /* ===================================================
     NEXT RETEST QUESTION
  =================================================== */

  const nextRetestQuestion =
    () => {
      if (
        !retestAnswers[
          `${activeRetestSkill}-${retestQuestionIndex}`
        ]
      ) {
        alert(
          "Please select an answer."
        );
        return;
      }

      if (
        retestQuestionIndex <
        activeRetestQuestions.length -
          1
      ) {
        setRetestQuestionIndex(
          (previous) =>
            previous + 1
        );
      } else {
        finishCurrentRetest();
      }
    };

  /* ===================================================
     FINAL SCORES
  =================================================== */

  const finalScores = {
    ...testScores,
    ...retestScores,
  };

  /* ===================================================
     FINAL STAGE
  =================================================== */

  const finalStageComplete =
    testCompleted &&
    (learningSkills.length === 0 ||
      retestCompleted);

  const finalReadiness =
    finalStageComplete
      ? calculateReadiness(
          finalScores
        )
      : 0;

  /* ===================================================
     FINAL GAP
  =================================================== */

  const finalGapAnalysis =
    finalStageComplete
      ? Object.entries(
          requiredSkills
        ).map(
          ([skill, required]) => {
            const selected =
              selectedSkills.includes(
                skill
              );

            const score = selected
              ? Number(
                  finalScores[
                    skill
                  ] || 0
                )
              : 0;

            let status =
              "Missing Skill";

            if (
              selected &&
              score >= required
            ) {
              status =
                "Job Ready";
            } else if (selected) {
              status =
                "Needs Improvement";
            }

            return {
              skill,
              required,
              score,
              status,
            };
          }
        )
      : [];

  /* ===================================================
     JOB MATCHING
  =================================================== */

  const matchingJobs =
    finalStageComplete
      ? Object.entries(jobs)
          .map(
            ([job, requirements]) => {
              let total = 0;

              Object.entries(
                requirements
              ).forEach(
                ([skill, required]) => {
                  const score =
                    selectedSkills.includes(
                      skill
                    )
                      ? Number(
                          finalScores[
                            skill
                          ] || 0
                        )
                      : 0;

                  total += Math.min(
                    (score /
                      required) *
                      100,
                    100
                  );
                }
              );

              const match =
                Math.round(
                  total /
                    Object.keys(
                      requirements
                    ).length
                );

              return {
                job,
                match,
              };
            }
          )
          .sort(
            (a, b) =>
              b.match - a.match
          )
      : [];

  /* ===================================================
     RESET
  =================================================== */

  const resetAll = () => {
    setSelectedSkills([]);
    setRatings({});
    setTargetJob("");

    setBackendQuestions({});
    setQuestionError("");
    setLoadingQuestions(false);

    setTestAnswers({});
    setTestScores({});
    setTestSkillIndex(0);
    setTestQuestionIndex(0);
    setTestStarted(false);
    setTestCompleted(false);

    setAssessmentAnswers({});
    setAssessmentScores({});
    setAssessmentCompleted({});

    setRetestAnswers({});
    setRetestScores({});
    setRetestSkillIndex(0);
    setRetestQuestionIndex(0);
    setRetestStarted(false);
    setRetestCompleted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ===================================================
     UI
  =================================================== */

  return (
    <div className="dashboard">

      {/* HEADER */}

      <header className="top-header">
        <div>
          <h1>SkillConnect</h1>

          <p>
            Bridge the Gap Between Skills and Jobs
          </p>
        </div>

        <div className="student-info">
          Welcome,{" "}
          {student?.name || "Student"}
        </div>
      </header>

      <main className="dashboard-container">

        {/* HERO */}

        <section className="hero">
          <h2>
            Your Skill Development Journey
          </h2>

          <p>
            Select your skills, complete
            backend-based tests, identify
            skill gaps, learn, and check
            your final job readiness.
          </p>
        </section>

        {/* =================================================
            STEP 1
        ================================================= */}

        <section className="section-card">

          <div className="step-title">
            <span>1</span>

            <div>
              <h2>
                Select Your Skills
              </h2>

              <p>
                Select only the skills you
                currently have.
              </p>
            </div>
          </div>

          <div className="skill-grid">
            {skills.map(
              (skill) => (
                <button
                  key={skill}
                  className={`skill-chip ${
                    selectedSkills.includes(
                      skill
                    )
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    toggleSkill(
                      skill
                    )
                  }
                >
                  {selectedSkills.includes(
                    skill
                  )
                    ? "✓ "
                    : ""}

                  {skill}
                </button>
              )
            )}
          </div>

          <p>
            Selected Skills:{" "}
            <strong>
              {selectedSkills.length}
            </strong>
          </p>
        </section>

        {/* =================================================
            STEP 2
        ================================================= */}

        <section className="section-card">

          <div className="step-title">
            <span>2</span>

            <div>
              <h2>
                Self Rating
              </h2>

              <p>
                Self rating is only for
                your initial profile.
                Actual test score is used
                for readiness.
              </p>
            </div>
          </div>

          {selectedSkills.length ===
          0 ? (
            <div className="empty-box">
              Select skills first.
            </div>
          ) : (
            <div className="rating-grid">

              {selectedSkills.map(
                (skill) => (
                  <div
                    className="rating-card"
                    key={skill}
                  >
                    <h3>
                      {skill}
                    </h3>

                    <div className="rating-options">
                      {[
                        "Beginner",
                        "Intermediate",
                        "Advanced",
                        "Expert",
                      ].map(
                        (level) => (
                          <button
                            key={level}
                            className={
                              ratings[
                                skill
                              ]?.level ===
                              level
                                ? "rating-option active"
                                : "rating-option"
                            }
                            onClick={() =>
                              updateRating(
                                skill,
                                level
                              )
                            }
                          >
                            {level}
                          </button>
                        )
                      )}
                    </div>

                    {ratings[
                      skill
                    ] && (
                      <p>
                        Self Rating:{" "}
                        <strong>
                          {
                            ratings[
                              skill
                            ]
                              .percentage
                          }
                          %
                        </strong>
                      </p>
                    )}
                  </div>
                )
              )}

            </div>
          )}
        </section>

        {/* =================================================
            STEP 3
        ================================================= */}

        <section className="section-card">

          <div className="step-title">
            <span>3</span>

            <div>
              <h2>
                Select Target Job
              </h2>

              <p>
                Target job requirements
                will be displayed.
              </p>
            </div>
          </div>

          <div className="job-grid">

            {Object.keys(jobs).map(
              (job) => (
                <button
                  key={job}
                  className={`job-option ${
                    targetJob === job
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    setTargetJob(job);

                    setTestCompleted(
                      false
                    );

                    setTestStarted(
                      false
                    );

                    setTestScores(
                      {}
                    );

                    setBackendQuestions(
                      {}
                    );

                    setAssessmentCompleted(
                      {}
                    );

                    setAssessmentScores(
                      {}
                    );

                    setRetestCompleted(
                      false
                    );

                    setRetestStarted(
                      false
                    );

                    setRetestScores(
                      {}
                    );

                    setQuestionError(
                      ""
                    );
                  }}
                >
                  {targetJob === job
                    ? "✓ "
                    : ""}

                  {job}
                </button>
              )
            )}

          </div>

          {targetJob && (
            <div className="job-requirement-box">

              <h3>
                {targetJob} Required Skills
              </h3>

              <div className="requirement-list">

                {Object.entries(
                  requiredSkills
                ).map(
                  ([
                    skill,
                    percentage,
                  ]) => (
                    <div
                      className="requirement-item"
                      key={skill}
                    >
                      <span>
                        {skill}
                      </span>

                      <strong>
                        {percentage}%
                      </strong>
                    </div>
                  )
                )}

              </div>
            </div>
          )}
        </section>

        {/* =================================================
            STEP 4
        ================================================= */}

        <section className="section-card">

          <div className="step-title">
            <span>4</span>

            <div>
              <h2>
                Skill Test
              </h2>

              <p>
                Questions are loaded from
                the SkillConnect backend.
                The test is conducted only
                for your selected skills.
              </p>
            </div>
          </div>

          {loadingQuestions && (
            <div className="action-box">
              <p>
                Loading your personalized
                skill test...
              </p>
            </div>
          )}

          {questionError && (
            <div className="empty-box">
              {questionError}
            </div>
          )}

          {!testStarted &&
            !testCompleted &&
            !loadingQuestions && (
              <div className="action-box">

                <p>
                  Your actual readiness
                  score will be calculated
                  from your backend-based
                  skill test.
                </p>

                <button
                  className="primary-btn"
                  onClick={
                    startSkillTest
                  }
                >
                  Start Skill Test
                </button>

              </div>
            )}

          {testStarted &&
            activeTestQuestion && (
              <div className="test-box">

                <div className="test-progress">
                  Skill{" "}
                  {testSkillIndex +
                    1}{" "}
                  of{" "}
                  {
                    selectedSkills.length
                  }

                  {" | "}

                  Question{" "}
                  {testQuestionIndex +
                    1}{" "}
                  of{" "}
                  {
                    activeTestQuestions.length
                  }
                </div>

                <h3>
                  {activeTestSkill}
                </h3>

                <h4>
                  {
                    activeTestQuestion.question
                  }
                </h4>

                {activeTestQuestion.difficulty && (
                  <p>
                    Difficulty:{" "}
                    <strong>
                      {
                        activeTestQuestion.difficulty
                      }
                    </strong>
                  </p>
                )}

                <div className="options">

                  {activeTestQuestion.options.map(
                    (option) => (
                      <button
                        key={option}
                        className={
                          testAnswers[
                            `${activeTestSkill}-${testQuestionIndex}`
                          ] ===
                          option
                            ? "answer selected-answer"
                            : "answer"
                        }
                        onClick={() =>
                          chooseTestAnswer(
                            option
                          )
                        }
                      >
                        {option}
                      </button>
                    )
                  )}

                </div>

                <button
                  className="primary-btn"
                  onClick={
                    nextTestQuestion
                  }
                >
                  {testQuestionIndex ===
                  activeTestQuestions.length -
                    1
                    ? testSkillIndex ===
                      selectedSkills.length -
                        1
                      ? "Finish Test"
                      : "Next Skill"
                    : "Next Question"}
                </button>

              </div>
            )}

          {testCompleted && (
            <div className="test-score-summary">

              <div className="success-box">
                ✓ Skill Test Completed
              </div>

              <div className="score-grid">

                {selectedSkills.map(
                  (skill) => (
                    <div
                      className="score-item"
                      key={skill}
                    >
                      <span>
                        {skill}
                      </span>

                      <strong>
                        {
                          testScores[
                            skill
                          ]
                        }
                        %
                      </strong>
                    </div>
                  )
                )}

              </div>

            </div>
          )}
        </section>

        {/* =================================================
            STEP 5
        ================================================= */}

        {testCompleted && (
          <section className="section-card">

            <div className="step-title">
              <span>5</span>

              <div>
                <h2>
                  Skill Gap Analysis
                </h2>

                <p>
                  Compare your actual
                  test score with the
                  target job requirement.
                </p>
              </div>
            </div>

            <div className="gap-grid">

              {gapAnalysis.map(
                (item) => (
                  <div
                    className="gap-card"
                    key={item.skill}
                  >
                    <h3>
                      {item.skill}
                    </h3>

                    <p>
                      Your Score:{" "}
                      <strong>
                        {item.score}%
                      </strong>
                    </p>

                    <p>
                      Required:{" "}
                      <strong>
                        {item.required}%
                      </strong>
                    </p>

                    <span
                      className={`status ${item.status
                        .toLowerCase()
                        .replaceAll(
                          " ",
                          "-"
                        )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                )
              )}

            </div>
          </section>
        )}

        {/* =================================================
            STEP 6
        ================================================= */}

        {testCompleted && (
          <section className="section-card">

            <div className="step-title">
              <span>6</span>

              <div>
                <h2>
                  Initial Job Readiness
                </h2>

                <p>
                  Calculated using your
                  actual skill test scores.
                </p>
              </div>
            </div>

            <div className="readiness-layout">

              <div className="readiness-circle">

                <span>
                  {initialReadiness}%
                </span>

                <small>
                  Initial Readiness
                </small>

              </div>

              <div className="readiness-info">

                <h3>
                  {initialReadiness >=
                  80
                    ? "Strong Job Readiness"
                    : initialReadiness >=
                      60
                    ? "Moderate Job Readiness"
                    : "Needs Improvement"}
                </h3>

                <p>
                  Target Job:{" "}
                  <strong>
                    {targetJob}
                  </strong>
                </p>

                <p>
                  Initial readiness is
                  based on your actual
                  test performance, not
                  self-rating.
                </p>

              </div>

            </div>
          </section>
        )}

        {/* =================================================
            STEP 7
        ================================================= */}

        {testCompleted && (
          <section className="section-card">

            <div className="step-title">
              <span>7</span>

              <div>
                <h2>
                  Personalized Learning
                </h2>

                <p>
                  Complete learning modules
                  and assessments for your
                  skill gaps.
                </p>
              </div>
            </div>

            {learningSkills.length ===
            0 ? (
              <div className="learning-all-complete">

                <h3>
                  🎉 No Additional Learning
                  Required
                </h3>

                <p>
                  Your selected skills
                  already meet the
                  requirements for{" "}
                  <strong>
                    {targetJob}
                  </strong>
                  .
                </p>

              </div>
            ) : (
              <div className="learning-list">

                {learningSkills.map(
                  (skill) => {
                    const modules =
                      getModules(skill);

                    return (
                      <div
                        className="learning-detail"
                        key={skill}
                      >

                        <div className="learning-header">

                          <div>
                            <span className="learning-label">
                              Skill Gap Learning
                            </span>

                            <h3>
                              {skill}
                            </h3>
                          </div>

                          {isSkillLearningComplete(
                            skill
                          ) && (
                            <span className="learning-completed">
                              ✓ Completed
                            </span>
                          )}

                        </div>

                        {modules.map(
                          (
                            module,
                            moduleIndex
                          ) => {
                            const key =
                              learningKey(
                                skill,
                                moduleIndex
                              );

                            const passed =
                              assessmentCompleted[
                                key
                              ];

                            const score =
                              assessmentScores[
                                key
                              ];

                            return (
                              <div
                                className="learning-module"
                                key={key}
                              >

                                <div className="module-heading">

                                  <div>
                                    <span>
                                      Module{" "}
                                      {moduleIndex +
                                        1}
                                    </span>

                                    <h4>
                                      {
                                        module.title
                                      }
                                    </h4>
                                  </div>

                                  {passed && (
                                    <span className="module-passed">
                                      ✓ Passed
                                    </span>
                                  )}

                                </div>

                                <div className="learning-content">

                                  <h4>
                                    Learning
                                    Content
                                  </h4>

                                  <ul>
                                    {module.content.map(
                                      (
                                        content,
                                        index
                                      ) => (
                                        <li
                                          key={
                                            index
                                          }
                                        >
                                          {
                                            content
                                          }
                                        </li>
                                      )
                                    )}
                                  </ul>

                                </div>

                                <div className="assessment-box">

                                  <div className="assessment-heading">

                                    <div>
                                      <h4>
                                        Module
                                        Assessment
                                      </h4>

                                      <p>
                                        Pass
                                        mark:
                                        70%
                                      </p>
                                    </div>

                                    {score !==
                                      undefined && (
                                      <strong>
                                        Score:{" "}
                                        {
                                          score
                                        }
                                        %
                                      </strong>
                                    )}

                                  </div>

                                  {module.assessment.map(
                                    (
                                      question,
                                      questionIndex
                                    ) => {
                                      const selected =
                                        assessmentAnswers[
                                          `${skill}-${moduleIndex}-${questionIndex}`
                                        ];

                                      return (
                                        <div
                                          className="assessment-question"
                                          key={
                                            questionIndex
                                          }
                                        >

                                          <p>
                                            <strong>
                                              Q
                                              {questionIndex +
                                                1}
                                              .
                                            </strong>{" "}
                                            {
                                              question.q
                                            }
                                          </p>

                                          <div className="assessment-options">

                                            {question.options.map(
                                              (
                                                option
                                              ) => (
                                                <button
                                                  key={
                                                    option
                                                  }
                                                  className={
                                                    selected ===
                                                    option
                                                      ? "assessment-option selected"
                                                      : "assessment-option"
                                                  }
                                                  onClick={() =>
                                                    chooseAssessmentAnswer(
                                                      skill,
                                                      moduleIndex,
                                                      questionIndex,
                                                      option
                                                    )
                                                  }
                                                >
                                                  {
                                                    option
                                                  }
                                                </button>
                                              )
                                            )}

                                          </div>
                                        </div>
                                      );
                                    }
                                  )}

                                  <button
                                    className="primary-btn"
                                    onClick={() =>
                                      submitAssessment(
                                        skill,
                                        moduleIndex
                                      )
                                    }
                                  >
                                    Submit Assessment
                                  </button>

                                </div>
                              </div>
                            );
                          }
                        )}

                        {isSkillLearningComplete(
                          skill
                        ) && (
                          <div className="learning-complete-box">
                            ✓ All modules and
                            assessments
                            completed for{" "}
                            {skill}.
                          </div>
                        )}

                      </div>
                    );
                  }
                )}

              </div>
            )}
          </section>
        )}

        {/* =================================================
            STEP 8
        ================================================= */}

        {testCompleted && (
          <section className="section-card">

            <div className="step-title">
              <span>8</span>

              <div>
                <h2>
                  Re-Test
                </h2>

                <p>
                  Re-test only the skills
                  that need improvement.
                </p>
              </div>
            </div>

            {learningSkills.length ===
            0 ? (
              <div className="success-box">
                No re-test required.
              </div>
            ) : !allLearningComplete ? (
              <div className="empty-box">
                Complete all learning
                modules and assessments
                first.
              </div>
            ) : !retestStarted &&
              !retestCompleted ? (
              <div className="action-box">

                <p>
                  All learning modules
                  are completed. You can
                  now take the re-test.
                </p>

                <button
                  className="primary-btn"
                  onClick={
                    startRetest
                  }
                >
                  Start Re-Test
                </button>

              </div>
            ) : null}

            {retestStarted &&
              activeRetestQuestion && (
                <div className="test-box">

                  <div className="test-progress">
                    Skill{" "}
                    {retestSkillIndex +
                      1}{" "}
                    of{" "}
                    {
                      learningSkills.length
                    }

                    {" | "}

                    Question{" "}
                    {retestQuestionIndex +
                      1}{" "}
                    of{" "}
                    {
                      activeRetestQuestions.length
                    }
                  </div>

                  <h3>
                    {activeRetestSkill}
                  </h3>

                  <h4>
                    {
                      activeRetestQuestion.question
                    }
                  </h4>

                  {activeRetestQuestion.difficulty && (
                    <p>
                      Difficulty:{" "}
                      <strong>
                        {
                          activeRetestQuestion.difficulty
                        }
                      </strong>
                    </p>
                  )}

                  <div className="options">

                    {activeRetestQuestion.options.map(
                      (option) => (
                        <button
                          key={option}
                          className={
                            retestAnswers[
                              `${activeRetestSkill}-${retestQuestionIndex}`
                            ] ===
                            option
                              ? "answer selected-answer"
                              : "answer"
                          }
                          onClick={() =>
                            chooseRetestAnswer(
                              option
                            )
                          }
                        >
                          {option}
                        </button>
                      )
                    )}

                  </div>

                  <button
                    className="primary-btn"
                    onClick={
                      nextRetestQuestion
                    }
                  >
                    {retestQuestionIndex ===
                    activeRetestQuestions.length -
                      1
                      ? retestSkillIndex ===
                        learningSkills.length -
                          1
                        ? "Finish Re-Test"
                        : "Next Skill"
                      : "Next Question"}
                  </button>

                </div>
              )}

            {retestCompleted && (
              <div className="test-score-summary">

                <div className="success-box">
                  ✓ Re-Test Completed
                </div>

                <div className="score-grid">

                  {learningSkills.map(
                    (skill) => (
                      <div
                        className="score-item"
                        key={skill}
                      >
                        <span>
                          {skill}
                        </span>

                        <strong>
                          {
                            retestScores[
                              skill
                            ]
                          }
                          %
                        </strong>
                      </div>
                    )
                  )}

                </div>
              </div>
            )}

          </section>
        )}

        {/* =================================================
            STEP 9
        ================================================= */}

        {testCompleted && (
          <section className="section-card">

            <div className="step-title">
              <span>9</span>

              <div>
                <h2>
                  Final Job Readiness
                </h2>

                <p>
                  Final percentage uses
                  improved re-test scores.
                </p>
              </div>
            </div>

            {!finalStageComplete ? (
              <div className="empty-box">
                Complete the required
                learning modules and
                re-test first.
              </div>
            ) : (
              <>
                <div className="readiness-layout">

                  <div className="readiness-circle final-circle">

                    <span>
                      {finalReadiness}%
                    </span>

                    <small>
                      Final Readiness
                    </small>

                  </div>

                  <div className="readiness-info">

                    <h3>
                      {finalReadiness >=
                      80
                        ? "🎉 Job Ready"
                        : finalReadiness >=
                          60
                        ? "Almost Ready"
                        : "Needs More Improvement"}
                    </h3>

                    <p>
                      Target Job:{" "}
                      <strong>
                        {targetJob}
                      </strong>
                    </p>

                    <p>
                      Final score is
                      calculated using
                      your final skill
                      scores.
                    </p>

                  </div>
                </div>

                <h3 className="sub-heading">
                  Final Skill Gap
                </h3>

                <div className="gap-grid">

                  {finalGapAnalysis.map(
                    (item) => (
                      <div
                        className="gap-card"
                        key={item.skill}
                      >

                        <h3>
                          {item.skill}
                        </h3>

                        <p>
                          Final Score:{" "}
                          <strong>
                            {item.score}%
                          </strong>
                        </p>

                        <p>
                          Required:{" "}
                          <strong>
                            {item.required}%
                          </strong>
                        </p>

                        <span
                          className={`status ${item.status
                            .toLowerCase()
                            .replaceAll(
                              " ",
                              "-"
                            )}`}
                        >
                          {item.status}
                        </span>

                      </div>
                    )
                  )}

                </div>
              </>
            )}
          </section>
        )}

        {/* =================================================
            STEP 10
        ================================================= */}

        {finalStageComplete && (
          <section className="section-card">

            <div className="step-title">
              <span>10</span>

              <div>
                <h2>
                  Job Matching
                </h2>

                <p>
                  Jobs are matched using
                  your final skill scores.
                </p>
              </div>
            </div>

            <div className="matching-grid">

              {matchingJobs.map(
                (item, index) => (
                  <div
                    className={`match-card ${
                      index === 0
                        ? "best-match"
                        : ""
                    }`}
                    key={item.job}
                  >

                    {index === 0 && (
                      <span className="best-badge">
                        Best Match
                      </span>
                    )}

                    <h3>
                      {item.job}
                    </h3>

                    <div className="match-score">
                      {item.match}%
                    </div>

                    <div className="progress">

                      <div
                        className="progress-fill"
                        style={{
                          width: `${item.match}%`,
                        }}
                      />

                    </div>

                  </div>
                )
              )}

            </div>
          </section>
        )}

        {/* =================================================
            RESET
        ================================================= */}

        <div className="reset-area">

          <button
            className="reset-btn"
            onClick={resetAll}
          >
            Start Again
          </button>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;
