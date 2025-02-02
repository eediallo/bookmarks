import { renderOptionList } from "./option.js";
import { setupEventListeners } from "./eventHandlers.js";

function main() {
  renderOptionList();
  setupEventListeners();
}

window.addEventListener("DOMContentLoaded", main);
