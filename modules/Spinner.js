export default class Spinner {
  constructor(selector) {
    this.el = document.querySelector(selector);
  }
  show() {
    this.el.style.display = "flex";
  }
  hide() {
    this.el.style.display = "none";
  }
}
