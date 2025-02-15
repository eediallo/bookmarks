import { renderOptionList } from "./option.js";
import { setupEventListeners } from "./eventHandlers/attachEventHandlers.js";

function main() {
  renderOptionList();
  setupEventListeners();
}

window.addEventListener("DOMContentLoaded", main);
