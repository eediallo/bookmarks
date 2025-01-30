import { USERS } from "./data.js";
import { handleBookmarkSubmission } from "./handleBookMarksSub.js";
import { loadBookmarksForSelectedUser } from "./loadBookMarks.js";
import { userSelectEl, formEl, createBookmarkBtn } from "./config.js";

function createUserOption(user) {
  const option = document.createElement("option");
  option.value = user.name;
  option.textContent = user.name;
  return option;
}

function render() {
  const usersList = USERS.map(createUserOption);
  userSelectEl.append(...usersList);
}

function createBookmarkCard(user) {
  const bookmarkCard = document.createElement("section");
  for (const { url, title, description, date } of user.bookmarks) {
    const titleEl = document.createElement("a");
    titleEl.setAttribute("href", url);
    titleEl.textContent = title;

    const titleP = document.createElement("p");
    titleP.append(titleEl);

    const descEl = document.createElement("p");
    descEl.textContent = description;
    const dateEl = document.createElement("p");
    dateEl.textContent = date;

    bookmarkCard.append(dateEl, titleP, descEl);
  }

  bookmarkCard.classList.add("bookmark-card");

  return bookmarkCard;
}

createBookmarkBtn.addEventListener("click", () => {
  formEl.style.display = "block";
  // event for bookmark submission
  formEl.addEventListener("submit", handleBookmarkSubmission);
  createBookmarkBtn.style.display = "none";
});

window.onload = function () {
  render();
  userSelectEl.addEventListener("change", loadBookmarksForSelectedUser);
};

export { createUserOption, createBookmarkCard };
