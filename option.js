import { USERS } from "./data/data.js";
import { userSelectEl } from "./config.js";

function createUserOption(user) {
  const option = document.createElement("option");
  option.value = user.name || "";
  option.textContent = user.name || "";
  return option;
}

function renderOptionList() {
  const usersList = USERS.map(createUserOption);
  userSelectEl.append(...usersList);
}

export { renderOptionList, createUserOption };
