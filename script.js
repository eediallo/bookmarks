// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { USERS } from "./data.js";
import { getUserIds, setData, clearData, getData } from "./storage.js";

const userSelectEl = document.getElementById("user");

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

const formEl = document.querySelector(".form");

if (formEl) {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = document.getElementById("url").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = new Date().toLocaleString();

    const collectedData = { url, title, description, date };

    const selectedUserName = userSelectEl.value;
    const user = INITIAL_USERS.find((user) => user.name === selectedUserName);
    if (user) {
      user.bookmarks.push(collectedData);
      setData(user.id, user);
      const bookmarksContainer = document.querySelector(".bookmarks");
      bookmarksContainer.innerHTML = ""; // Clear previous bookmarks
      const bookmarkCard = createBookmarkCard(user);
      bookmarksContainer.append(bookmarkCard);
    }
    formEl.reset();
  });
}

window.onload = function () {
  render();

  userSelectEl.addEventListener("change", (event) => {
    const optionText = event.target.value.toLowerCase();
    const bookmarksContainer = document.querySelector(".bookmarks");
    bookmarksContainer.innerHTML = ""; // Clear previous bookmarks

    const userIds = getUserIds();
    for (const id of userIds) {
      const userData = getData(id);
      if (userData) {
        console.log(userData, "<=---user data");

        if (userData.name && userData.name.toLowerCase() === optionText) {
          const bookmarkCard = createBookmarkCard(userData);
          bookmarksContainer.append(bookmarkCard);
        }
      } else {
        console.log("userData is null for id:", id);
      }
    }
  });
};

export { createUserOption, createBookmarkCard };
