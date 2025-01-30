import { handleBookmarkSubmission } from "./handleBookMarksSub.js";
import { loadBookmarksForSelectedUser } from "./loadBookMarks.js";
import { userSelectEl, formEl, createBookmarkBtn } from "./config.js";
import { renderOptionList } from "./option.js";

function showBookmarkForm() {
  formEl.style.display = "block";
  createBookmarkBtn.style.display = "none";
}

function main() {
  renderOptionList();
  createBookmarkBtn.addEventListener("click", showBookmarkForm);
  formEl.addEventListener("submit", handleBookmarkSubmission);
  userSelectEl.addEventListener("change", loadBookmarksForSelectedUser);
}

window.onload = main;
