const userSelectEl = document.getElementById("user");
import { createBookmarkCard } from "./bookMarkCard.js";
import { USERS } from "./data/data.js";
import { getData, setData } from "./data/storage.js";

export function handleBookmarkSubmission(e) {
  e.preventDefault();

  const urlInput = document.getElementById("url");
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  const url = urlInput.value;
  const title = titleInput.value;
  const description = descriptionInput.value;
  const date = new Date().toLocaleString();

  const bookmark = { url, title, description, date };

  const selectedUserName = userSelectEl.value;
  let user = USERS.find((user) => user.name === selectedUserName);
  if (user) {
    const existingData = getData(user.id) || user;
    existingData.bookmarks.push(bookmark);
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
