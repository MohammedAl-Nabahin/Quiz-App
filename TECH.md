## Quiz App Technical requirements:

## Folder Structure:

todo

### Requirements:

#### App Approach:

- Use JavaScript ES6+ classes
- Follow Object-Oriented Programming (OOP) principles
- Persist quiz state with Local Storage
- Load all questions at once
- **Multiple Choice Questions**: Allow multiple answers using checkboxes
- **Single Choice Questions**: Allow only one answer using radio buttons
- **Submit button**:
  - Saves selected answers
  - Calculates and displays the score
  - Hides questions and buttons, shows only score/feedback
- **Reset button**:
  - Clears all answers
  - Resets quiz state
  - Shows questions and buttons again
- Display score and feedback after submission
- After submission, user can reload to start a new attempt

---

#### App Flow: Based on User Stories

**1. Load Questions**

- Retrieve all questions from an array of objects
- For each question:
  - Use its `displayQuestion()` method to generate DOM options
  - Multiple choice questions use checkboxes (multiple answers)
  - Single choice questions use radio buttons (single answer)
  - Supports multiple-choice (MCQ) and single-choice (SCQ) types
- At least **10 questions** required (mixed types)
- On initial load:
  - Render all questions in the DOM
  - If no previous submission exists, restore answers from Local Storage
  - If submitted or new, start with empty answers

**2. Select Answer**

- Each selection updates answers both in UI and Local Storage:
  - For radio buttons: single value selection
  - For checkboxes: array of selected values
  - The UI gets the answers from the Quiz by recordAnswer()
  - The localStorage saves the selectedQuestions by saveState()
  - The UI reflects the updated selection

**3. Reset Quiz**

- Reset button actions:
  - Clear answers
  - Clear Local Storage
  - Initialize new quiz state in Local Storage
  - Display questions with no selections
  - Show questions and buttons again

**4. Submit Quiz**

- Submit button actions:
  - Save selected answers
  - Run `calculateScore()`
  - Hide questions and buttons
  - Display final score and feedback only
  - Show pass/fail feedback (`Pass ≥ 70%`)
  - Clear Local Storage for the next attempt

**5. Refresh Page**

- On reload:
  - If an active attempt exists → restore answers
  - If no active attempt or previous submission → start a fresh quiz

---
