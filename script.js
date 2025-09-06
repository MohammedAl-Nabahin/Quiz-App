import Quiz from "./modules/Quiz.js";
import StorageManager from "./modules/StorageManager.js";
import UiManager from "./modules/UiManager.js";
import Spinner from "./modules/Spinner.js";
import questionData from "./mock/questions.js";
import {
  applySavedTheme,
  setupEventListeners,
  updateSubmitButtonState,
  initializeQuizState,
  initializeUI,
} from "./utils.js";

let quiz, storage, ui, spinner;

applySavedTheme();

function initApp() {
  quiz = new Quiz();
  storage = new StorageManager();
  ui = new UiManager(quiz);
  spinner = new Spinner(".spinner");

  initializeUI(spinner);

  quiz.loadQuestions(questionData);
  initializeQuizState(quiz, storage);

  ui.displayAllQuestions();
  updateSubmitButtonState(quiz);
  setupEventListeners(quiz, storage, ui, spinner);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
