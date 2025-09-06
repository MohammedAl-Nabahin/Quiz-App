import MultipleChoiceQuestion from "../modules/MultipleChoiceQuestion.js";
import SingleChoiceQuestion from "../modules/SingleChoiceQuestion.js";

const questionData = [
  new MultipleChoiceQuestion(
    1,
    "Which of the following are programming languages?",
    ["JavaScript", "HTML", "Python", "CSS"],
    ["JavaScript", "Python"]
  ),
  new SingleChoiceQuestion(
    2,
    "Is JavaScript a programming language?",
    ["True", "False"],
    "True"
  ),
  new SingleChoiceQuestion(
    3,
    "Is HTML a programming language?",
    ["True", "False"],
    "False"
  ),
  new MultipleChoiceQuestion(
    4,
    "Which of these are web technologies?",
    ["HTML", "CSS", "JavaScript", "Python"],
    ["HTML", "CSS", "JavaScript"]
  ),
  new SingleChoiceQuestion(
    5,
    "What does CSS stand for?",
    [
      "Cascading Style Sheets",
      "Computer Style System",
      "Code Syntax Sheet",
      "Creative Styling Standard",
    ],
    "Cascading Style Sheets"
  ),
  new SingleChoiceQuestion(
    6,
    "Which sea is Gaza located on?",
    ["Mediterranean Sea", "Red Sea", "Dead Sea", "Black Sea"],
    "Mediterranean Sea"
  ),
  new MultipleChoiceQuestion(
    7,
    "Which cities are part of the Gaza Strip?",
    ["Gaza City", "Rafah", "Jerusalem", "Khan Younis"],
    ["Gaza City", "Rafah", "Khan Younis"]
  ),
  new SingleChoiceQuestion(
    8,
    "What is the largest city in the Gaza Strip?",
    ["Gaza City", "Rafah", "Khan Younis", "Deir al-Balah"],
    "Gaza City"
  ),
  new MultipleChoiceQuestion(
    9,
    "Which countries border Palestine?",
    ["Egypt", "Jordan", "Lebanon"],
    ["Egypt", "Jordan", "Israel"]
  ),
  new SingleChoiceQuestion(
    10,
    "Which keyword is used to declare a constant in JavaScript?",
    ["let", "var", "const", "static"],
    "const"
  ),
];

export default questionData;
