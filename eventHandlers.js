import {formEl, userSelectEl } from "./config.js";
import { handleBookmarkSubmission } from "./handleBookMarksSub.js";
import { loadBookmarksForSelectedUser } from "./loadBookMarks.js";
// import { toggleBookmarkFormAndButtonVisibility } from "./config.js";

export function setupEventListeners() {
  //   if (createBookmarkBtn) {
  //     createBookmarkBtn.addEventListener("click", () => {
  //       toggleBookmarkFormAndButtonVisibility(false);
  //     });
  //   }

  if (formEl) {
    formEl.addEventListener("submit", handleBookmarkSubmission);
  }

  if (userSelectEl) {
    userSelectEl.addEventListener("change", loadBookmarksForSelectedUser);
  }
}
