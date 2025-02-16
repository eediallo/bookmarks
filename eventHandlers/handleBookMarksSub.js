import { userSelectEl } from "../config.js";
import { updateUserBookmarks } from "../UI/updateBookmarks.js";
import { USERS } from "../data/data.js";

export function handleBookmarkSubmission(e) {
  e.preventDefault();

  const urlInput = document.getElementById("url");
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  const url = urlInput.value;
  const title = titleInput.value;
  const description = descriptionInput.value;
  const date = new Date();

  const bookmark = { url, title, description, date };

  const selectedUserName = userSelectEl.value;
  let user = USERS.find((user) => user.name === selectedUserName);
  user = updateUserBookmarks(user, bookmark);

  // Clear form fields after submission
  urlInput.value = "";
  titleInput.value = "";
  descriptionInput.value = "";
}
