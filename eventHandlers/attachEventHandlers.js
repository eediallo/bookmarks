import { formEl, userSelectEl } from "../domQueries.js";
import { handleBookmarkSubmission } from "./handleBookMarksSub.js";
import { loadBookmarksForSelectedUser } from "./loadBookMarks.js";

export function attachEventHandlers() {
  formEl.addEventListener("submit", handleBookmarkSubmission);
  userSelectEl.addEventListener("change", loadBookmarksForSelectedUser);
}
