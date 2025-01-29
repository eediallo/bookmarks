// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds } from "./storage.js";
import { users } from "./users.js";

const userSelectEl = document.getElementById("user");

function createUserOption(user) {
  const option = document.createElement("option");
  option.value = user.name;
  option.textContent = user.name;
  return option;
}

function render() {
  const usersList = users.map(createUserOption);
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

    bookmarkCard.append(date, titleP, descEl);
  }

  bookmarkCard.classList.add("bookmark-card");

  return bookmarkCard;
}

function renderBookmarks() {
  const bookmarks = users.map(createBookmarkCard);
  document.querySelector(".bookmarks").append(...bookmarks);
}

window.onload = function () {
  render();
  renderBookmarks();
};

export { createUserOption, createBookmarkCard };
