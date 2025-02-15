import { renderOptionList } from "./option.js";
import { attachEventHandlers } from "./eventHandlers/attachEventHandlers.js";

function main() {
  renderOptionList();
  attachEventHandlers();
}

window.addEventListener("DOMContentLoaded", main);
