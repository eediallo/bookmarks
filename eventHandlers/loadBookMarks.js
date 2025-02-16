import { getUserIds, getData } from "../data/storage.js";
import { renderBookmarks } from "../UI/bookMarkCard.js";
import { bookmarksContainer, userSelectEl } from "../domQueries.js";
import { createElement } from "../UI/createElement.js";

export function loadBookmarksForSelectedUser() {
  const selectedUser = userSelectEl.value;
  bookmarksContainer.innerHTML = "";

  const userIds = getUserIds();
  let userFound = false;
  for (const id of userIds) {
    const userData = getData(id);
    if (userData && userData.name && userData.name === selectedUser) {
      userFound = true;

      const bookmarkTitle = createElement(`${userData.name}'s bookmarks`, "h1");
      bookmarksContainer.append(bookmarkTitle);

      if (userData.bookmarks && userData.bookmarks.length > 0) {
        renderBookmarks(userData.bookmarks);
      }
    }
  }
  if (!userFound) {
    bookmarksContainer.innerHTML = `<p>No bookmarks available for <strong>${selectedUser}</strong></p>`;
  }
}
