class StorageManager {
  #key = "quizState";

  saveState(quizState) {
    localStorage.setItem(this.#key, JSON.stringify(quizState));
  }

  loadState() {
    const state = localStorage.getItem(this.#key);
    return state ? JSON.parse(state) : null;
  }

  clearState() {
    localStorage.removeItem(this.#key);
  }
}

export default StorageManager;
