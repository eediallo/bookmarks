import { handleBookmarkSubmission } from "./handleBookMarksSub.js";
import { loadBookmarksForSelectedUser } from "./loadBookMarks.js";
import { userSelectEl, formEl, createBookmarkBtn } from "./config.js";
import { renderOptionList } from "./option.js";

window.onload = function () {
  createBookmarkBtn.addEventListener("click", () => {
    formEl.style.display = "block";
    // event for bookmark submission
    formEl.addEventListener("submit", handleBookmarkSubmission);
    createBookmarkBtn.style.display = "none";
  });

  renderOptionList();
  userSelectEl.addEventListener("change", loadBookmarksForSelectedUser);
};
