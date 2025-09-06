export function applySavedTheme() {
  try {
    const saved = localStorage.getItem("quiz-theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);

    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.textContent = saved === "dark" ? "🌞" : "🌙";
    }
  } catch (e) {}
}

export function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("quiz-theme", newTheme);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.textContent = newTheme === "dark" ? "🌞" : "🌙";
  }
}

export function updateSubmitButtonState(quiz) {
  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) {
    const isComplete = quiz.isComplete();
    submitBtn.disabled = !isComplete;
    submitBtn.style.opacity = isComplete ? "1" : "0.6";
    submitBtn.style.cursor = isComplete ? "pointer" : "not-allowed";
  }
}

export function showSpinner(spinner) {
  spinner.show();
}

export function hideSpinner(spinner) {
  spinner.hide();
}

export function hideQuizElements() {
  const questionsContainer = document.querySelector(".questions");
  const actionsContainer = document.querySelector(".actions");
  const quizTitle = document.querySelector(".quiz-title");

  if (questionsContainer) questionsContainer.style.display = "none";
  if (actionsContainer) actionsContainer.style.display = "none";
  if (quizTitle) quizTitle.style.display = "none";
}

export function showQuizElements() {
  const questionsContainer = document.querySelector(".questions");
  const actionsContainer = document.querySelector(".actions");
  const quizTitle = document.querySelector(".quiz-title");

  if (questionsContainer) questionsContainer.style.display = "block";
  if (actionsContainer) actionsContainer.style.display = "flex";
  if (quizTitle) quizTitle.style.display = "block";
}

export function showResultContainer() {
  const resultContainer = document.querySelector(".quiz-result");
  if (resultContainer) {
    resultContainer.style.display = "block";
  }
}

export function handleSelect(quiz, storage, questionId, answer) {
  quiz.recordAnswer(questionId, answer);
  storage.saveState({
    answers: quiz.answers,
    score: quiz.score,
    attemptActive: true,
  });
}

export function handleSubmit(e, quiz, ui, storage, spinner) {
  e.preventDefault();

  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn.disabled) {
    return;
  }

  if (!quiz.isComplete()) {
    alert("Please answer all questions!");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  showSpinner(spinner);

  setTimeout(() => {
    hideSpinner(spinner);
    quiz.submit();

    hideQuizElements();
    ui.showScore();
    ui.showFeedback();
    showResultContainer();

    storage.clearState();
  }, 1000);
}

export function handleReset(quiz, storage, ui) {
  quiz.reset();
  storage.clearState();
  ui.resetUI();
  updateSubmitButtonState(quiz);
  showQuizElements();

  document.dispatchEvent(new CustomEvent("quizReset"));
}

export function setupEventListeners(quiz, storage, ui, spinner) {
  const questionsContainer = document.querySelector(".questions");

  questionsContainer.addEventListener("change", (e) => {
    if (e.target.type === "radio") {
      const questionId = e.target.name.replace("question-", "");
      const answer = e.target.value;
      handleSelect(quiz, storage, questionId, answer);
    } else if (e.target.type === "checkbox") {
      const questionId = e.target.name.replace("question-", "");
      const checkboxes = document.querySelectorAll(
        `input[name="question-${questionId}"]:checked`
      );
      const answers = Array.from(checkboxes).map((cb) => cb.value);
      handleSelect(quiz, storage, questionId, answers);
    }
    updateSubmitButtonState(quiz);
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "submit-btn") {
      handleSubmit(e, quiz, ui, storage, spinner);
    }
    if (e.target.id === "reset-btn") {
      handleReset(quiz, storage, ui);
    }
    if (e.target.id === "theme-toggle") {
      toggleTheme();
    }
  });

  document.addEventListener("quizSubmitted", (e) => {});
  document.addEventListener("quizReset", () => {});
}

export function initializeQuizState(quiz, storage) {
  const savedState = storage.loadState();

  if (savedState && savedState.attemptActive) {
    quiz.answers = savedState.answers || {};
    quiz.score = savedState.score || 0;
    quiz.attemptActive = true;
    quiz.questions.forEach((q) => {
      const keyId = String(q.id);
      if (quiz.answers[keyId]) {
        q.setUserAnswer(quiz.answers[keyId]);
      }
    });
  }
}

export function initializeUI(spinner) {
  const quizData = document.querySelector(".quiz-data");
  quizData.style.display = "none";

  showSpinner(spinner);

  setTimeout(() => {
    hideSpinner(spinner);
    quizData.style.display = "block";
  }, 500);
}
