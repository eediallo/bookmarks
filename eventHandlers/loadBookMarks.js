import { getUserIds, getData } from "../data/storage.js";
import { renderBookmarks } from "../UI/bookMarkCard.js";
import { bookmarksContainer, userSelectEl } from "../domQueries.js";
import { createElement } from "../UI/createElement.js";

export function loadBookmarksForSelectedUser() {
  const optionText = userSelectEl.value.toLowerCase();
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

      const bookmarkTitle = createElement(`${userData.name}'s bookmarks`, "h1");
      bookmarksContainer.append(bookmarkTitle);

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
