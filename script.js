import { renderOptionList } from "./UI/userDropDown.js";
import { attachEventHandlers } from "./eventHandlers/attachEventHandlers.js";

function main() {
  renderOptionList();
  attachEventHandlers();
}

window.onload = main;
