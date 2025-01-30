import { handleBookmarkSubmission } from "./handleBookMarksSub.js";
import { loadBookmarksForSelectedUser } from "./loadBookMarks.js";
import {
  userSelectEl,
  formEl,
  createBookmarkBtn,
  toggleBookmarkFormAndButtonVisibility,
} from "./config.js";
import { renderOptionList } from "./option.js";

function main() {
  renderOptionList();
  createBookmarkBtn.addEventListener("click", () => {
    toggleBookmarkFormAndButtonVisibility(false);
  });
  formEl.addEventListener("submit", handleBookmarkSubmission);
  userSelectEl.addEventListener("change", loadBookmarksForSelectedUser);
}

window.onload = main;
