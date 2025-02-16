import { addBookmarkBtn, formEl, userSelectEl } from "../domQueries.js";
import { handleBookmarkSubmission } from "./handleBookMarksSub.js";
import { loadBookmarksForSelectedUser } from "./loadBookMarks.js";
import { toggleFormDisplay } from "./toggleFormDisplay.js";

export function attachEventHandlers() {
  formEl.addEventListener("submit", handleBookmarkSubmission);
  userSelectEl.addEventListener("change", loadBookmarksForSelectedUser);
  addBookmarkBtn.addEventListener("click", () => {
    toggleFormDisplay(false);
  });
}
