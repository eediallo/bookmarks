import { USERS } from "../data/users.js";
import { userSelectEl } from "../domQueries.js";

function createUserOption(user) {
  const option = document.createElement("option");
  option.value = user.name || "";
  option.textContent = user.name || "";
  return option;
}

function renderDropDownList() {
  const usersList = USERS.map(createUserOption);
  userSelectEl.append(...usersList);
}

export { renderDropDownList, createUserOption };
