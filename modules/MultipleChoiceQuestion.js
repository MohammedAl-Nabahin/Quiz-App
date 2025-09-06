import Question from "./Question.js";
class MultipleChoiceQuestion extends Question {
  displayQuestion(container) {
    const questionElem = document.createElement("div");
    questionElem.className = "question-text";
    questionElem.textContent = this.id + ". " + this.text;
    container.appendChild(questionElem);

    this.options.forEach((option) => {
      const optionLabel = document.createElement("label");
      optionLabel.className = "option-btn";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = `question-${this.id}`;
      checkbox.value = option;

      const userAnswers = this.getUserAnswer() || [];
      if (Array.isArray(userAnswers) && userAnswers.includes(option)) {
        checkbox.checked = true;
      }

      optionLabel.appendChild(checkbox);
      optionLabel.appendChild(document.createTextNode(option));
      container.appendChild(optionLabel);
    });
  }
}
export default MultipleChoiceQuestion;
