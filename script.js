import { renderDropDownList } from "./UI/userDropDown.js";
import { attachEventHandlers } from "./eventHandlers/attachEventHandlers.js";

function main() {
  renderDropDownList();
  attachEventHandlers();
}

window.onload = main;
