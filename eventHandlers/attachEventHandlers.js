import { formEl, userSelectEl } from "../domQueries.js";
import { handleBookmarkSubmission } from "./handleBookMarksSub.js";
import { loadBookmarksForSelectedUser } from "./loadBookMarks.js";

export function attachEventHandlers() {
  if (formEl) {
    formEl.addEventListener("submit", handleBookmarkSubmission);
  }

  if (userSelectEl) {
    userSelectEl.addEventListener("change", loadBookmarksForSelectedUser);
  }
}
