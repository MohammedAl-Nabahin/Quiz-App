import Question from "./Question.js";

class SingleChoiceQuestion extends Question {
  displayQuestion(container) {
    const questionElem = document.createElement("div");
    questionElem.className = "question-text";
    questionElem.textContent = this.id + ". " + this.text;
    container.appendChild(questionElem);

    this.options.forEach((option) => {
      const optionLabel = document.createElement("label");
      optionLabel.className = "option-btn";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${this.id}`;
      radio.value = option;

      if (this.getUserAnswer() === option) {
        radio.checked = true;
      }

      optionLabel.append(radio);
      optionLabel.append(document.createTextNode(option));
      container.append(optionLabel);
    });
  }
}
export default SingleChoiceQuestion;
