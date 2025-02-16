import { getUserIds, getData } from "../data/storage.js";
import { renderBookmarks } from "../UI/bookMarkCard.js";
const userSelectEl = document.getElementById("user");

export function loadBookmarksForSelectedUser() {
  const optionText = userSelectEl.value.toLowerCase();
  const bookmarksContainer = document.querySelector(".bookmarks");
  bookmarksContainer.innerHTML = "";

  const userIds = getUserIds();
  let userFound = false;
  for (const id of userIds) {
    const userData = getData(id);
    if (
      userData &&
      userData.name &&
      userData.name.toLowerCase() === optionText
    ) {
      userFound = true;
      if (userData.bookmarks && userData.bookmarks.length > 0) {
        renderBookmarks(userData.bookmarks);
      }
    }
  }
  if (!userFound || bookmarksContainer.children.length === 0) {
    bookmarksContainer.innerHTML = `<p>No bookmarks available for <strong>${optionText[0].toUpperCase()}${optionText.slice(
      1
    )}</strong></p>`;
  }
}
