import { getUserIds, getData } from "../data/storage.js";
import { renderBookmarks } from "../UI/bookMarkCard.js";
import { bookmarksContainer, userSelectEl } from "../domQueries.js";
import { createElement } from "../UI/createElements.js";

export function loadBookmarksForSelectedUser() {
  const selectedUser = userSelectEl.value;
  bookmarksContainer.innerHTML = "";

  const userIds = getUserIds();
  let userFound = false;
  for (const id of userIds) {
    const userData = getData(id);
    if (userData && userData.name && userData.name === selectedUser) {
      userFound = true;

      const titleContent =
        userData.bookmarks.length > 1
          ? `${userData.name}'s bookmarks`
          : `${userData.name}'s bookmark`;
      const bookmarkTitle = createElement(titleContent, "h1");
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
