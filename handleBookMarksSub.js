const userSelectEl = document.getElementById("user");
import { createBookmarkCard } from "./script.js";
import { USERS } from "./data.js";
import { getData, setData } from "./storage.js";

export function handleBookmarkSubmission(e) {
  e.preventDefault();

  const url = document.getElementById("url").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = new Date().toLocaleString();

  const collectedData = { url, title, description, date };

  const selectedUserName = userSelectEl.value;
  let user = USERS.find((user) => user.name === selectedUserName);
  if (user) {
    const existingData = getData(user.id) || [];
    console.log(existingData);
    existingData.bookmarks.push(collectedData);
    user = existingData;
    setData(user.id, user);
    const bookmarksContainer = document.querySelector(".bookmarks");
    bookmarksContainer.innerHTML = ""; // create previous bookmarks
    const bookmarkCard = createBookmarkCard(user);
    bookmarksContainer.append(bookmarkCard);
  }
}
