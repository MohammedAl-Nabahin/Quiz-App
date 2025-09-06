class Quiz {
  constructor() {
    this.questions = [];
    this.answers = {};
    this.score = 0;
    this.attemptActive = true;
    this.submitted = false;
  }

  loadQuestions(questionData) {
    this.questions = questionData;
  }

  recordAnswer(questionId, answer) {
    const keyId = String(questionId);
    this.answers[keyId] = answer;

    const question = this.questions.find((q) => q.id == questionId);
    if (question) question.setUserAnswer(answer);
  }

  calculateScore() {
    let correct = 0;
    this.questions.forEach((q) => {
      const keyId = String(q.id);
      if (q.checkAnswer(this.answers[keyId])) correct++;
    });
    this.score = correct;
    return correct;
  }

  isComplete() {
    return this.questions.every((q) => {
      const keyId = String(q.id);
      const answer = this.answers[keyId];
      if (Array.isArray(answer)) {
        return answer.length > 0;
      }
      return answer !== undefined && answer !== null;
    });
  }

  reset() {
    this.answers = {};
    this.score = 0;
    this.attemptActive = true;
    this.submitted = false;
    this.questions.forEach((q) => q.setUserAnswer(null));
  }

  submit() {
    this.calculateScore();
    this.submitted = true;
    this.attemptActive = false;
  }
}
export default Quiz;
