import { addBookmarkBtn, formEl } from "../domQueries.js";

export function toggleFormAndButtonDisplay(isDisplayed) {
  if (!isDisplayed) {
    formEl.style.display = "block";
    addBookmarkBtn.style.display = "none";
  } else {
    formEl.style.display = "none";
    addBookmarkBtn.style.display = "block";
  }
}
