import { getUserIds, getData } from "./storage.js";
import { createBookmarkCard } from "./bookMarkCard.js";
const userSelectEl = document.getElementById("user");

export function loadBookmarksForSelectedUser() {
  const optionText = userSelectEl.value.toLowerCase();
  const bookmarksContainer = document.querySelector(".bookmarks");
  bookmarksContainer.innerHTML = ""; // Clear previous bookmarks

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
        const bookmarkCard = createBookmarkCard(userData);
        bookmarksContainer.append(bookmarkCard);
      }
    }
  }
  if (!userFound || bookmarksContainer.children.length === 0) {
    bookmarksContainer.innerHTML = `<p>No bookmarks available for <strong>${optionText}</strong></p>`;
  }
}
