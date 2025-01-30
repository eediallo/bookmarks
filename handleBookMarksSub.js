const userSelectEl = document.getElementById("user");
import { createBookmarkCard } from "./script.js";
import { USERS } from "./data.js";
import { getData, setData } from "./storage.js";

export function handleBookmarkSubmission(e) {
  e.preventDefault();

  const urlInput = document.getElementById("url");
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  const url = urlInput.value;
  const title = titleInput.value;
  const description = descriptionInput.value;
  const date = new Date().toLocaleString();

  const collectedData = { url, title, description, date };

  const selectedUserName = userSelectEl.value;
  let user = USERS.find((user) => user.name === selectedUserName);
  if (user) {
    const existingData = getData(user.id) || user;
    console.log(existingData);
    existingData.bookmarks.push(collectedData);
    user = existingData;
    setData(user.id, user);
    const bookmarksContainer = document.querySelector(".bookmarks");
    bookmarksContainer.innerHTML = ""; // create previous bookmarks
    const bookmarkCard = createBookmarkCard(user);
    bookmarksContainer.append(bookmarkCard);
  }

  // Clear form fields after submission
  urlInput.value = "";
  titleInput.value = "";
  descriptionInput.value = "";
}
