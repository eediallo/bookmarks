import { renderOptionList } from "./UI/option.js";
import { attachEventHandlers } from "./eventHandlers/attachEventHandlers.js";

function main() {
  renderOptionList();
  attachEventHandlers();
}

window.addEventListener("DOMContentLoaded", main);
