class UiManager {
  constructor(quiz) {
    this.quiz = quiz;
    this.questionsContainer = document.querySelector(".questions");
    this.actionsContainer = document.querySelector(".actions");
    this.resultContainer = document.querySelector(".quiz-result");
    this.createButtons();
  }

  createButtons() {
    this.actionsContainer.innerHTML = "";

    const submitBtn = document.createElement("button");
    submitBtn.id = "submit-btn";
    submitBtn.textContent = "Submit Quiz";
    submitBtn.className = "btn btn-primary";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.6";
    submitBtn.style.cursor = "not-allowed";

    const resetBtn = document.createElement("button");
    resetBtn.id = "reset-btn";
    resetBtn.textContent = "Reset Quiz";
    resetBtn.className = "btn btn-secondary";

    this.actionsContainer.appendChild(submitBtn);
    this.actionsContainer.appendChild(resetBtn);
  }

  displayAllQuestions() {
    this.questionsContainer.innerHTML = "";

    this.quiz.questions.forEach((question) => {
      const questionBox = document.createElement("div");
      questionBox.className = "question-box";
      question.displayQuestion(questionBox);
      this.questionsContainer.appendChild(questionBox);
    });
  }

  updateSelection(questionId, answer) {
    this.quiz.recordAnswer(questionId, answer);
  }

  showScore() {
    const scoreText = `Score: ${this.quiz.score} / ${this.quiz.questions.length}`;
    this.resultContainer.textContent = scoreText;
  }

  showFeedback() {
    const percent = (this.quiz.score / this.quiz.questions.length) * 100;
    const feedbackText = percent >= 70 ? " - You Passed 🎉" : " - You Failed!";
    const message = "Refresh the page to start a new attempt";
    const p = document.createElement("p");
    p.textContent = message;
    this.resultContainer.textContent += feedbackText;
    this.resultContainer.append(p);
    if (percent >= 70) {
      this.resultContainer.classList.add("pass");
      this.resultContainer.classList.remove("fail");
    } else {
      this.resultContainer.classList.add("fail");
      this.resultContainer.classList.remove("pass");
    }
  }

  resetUI() {
    this.displayAllQuestions();
    this.resultContainer.textContent = "";

    this.quiz.questions.forEach((q) => {
      const inputs = document.querySelectorAll(
        `input[name="question-${q.id}"]`
      );
      inputs.forEach((input) => (input.checked = false));
    });
  }
}
export default UiManager;
