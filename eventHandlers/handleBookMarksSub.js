import {
  userSelectEl,
  urlInputEl,
  descriptionInputEl,
  titleInputEl,
} from "../domQueries.js";
import { updateUserBookmarks } from "../UI/updateBookmarks.js";
import { USERS } from "../data/data.js";

export function handleBookmarkSubmission(e) {
  e.preventDefault();
  const url = urlInputEl.value;
  const title = titleInputEl.value;
  const description = descriptionInputEl.value;
  const date = new Date();

  const bookmark = { url, title, description, date };

  const selectedUserName = userSelectEl.value;
  let user = USERS.find((user) => user.name === selectedUserName);
  user = updateUserBookmarks(user, bookmark);

  // Clear form fields after submission
  urlInputEl.value = "";
  titleInputEl.value = "";
  descriptionInputEl.value = "";
}
