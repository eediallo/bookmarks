const formEl = document.querySelector(".form");
const userSelectEl = document.querySelector("#user");
const bookmarksContainer = document.querySelector(".bookmarks");
const urlInputEl = document.querySelector("#url");
const titleInputEl = document.querySelector("#title");
const descriptionInputEl = document.querySelector("#description");
const addBookmarkBtn = document.querySelector("#addBookmarkBtn");

formEl.style.display = "none";

export {
  formEl,
  userSelectEl,
  bookmarksContainer,
  urlInputEl,
  titleInputEl,
  descriptionInputEl,
  addBookmarkBtn,
};
