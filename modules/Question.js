class Question {
  constructor(id, text, options, correctAnswer) {
    this.id = id;
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.userAnswer = null;
  }

  displayQuestion(container) {
    throw new Error("Must implement this function");
  }

  checkAnswer(answer) {
    if (Array.isArray(this.correctAnswer)) {
      if (!Array.isArray(answer)) return false;
      return (
        this.correctAnswer.length === answer.length &&
        this.correctAnswer.every((correct) => answer.includes(correct))
      );
    }
    return answer === this.correctAnswer;
  }

  setUserAnswer(answer) {
    this.userAnswer = answer;
  }

  getUserAnswer() {
    return this.userAnswer;
  }
}

export default Question;
