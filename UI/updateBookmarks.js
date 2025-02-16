import { sortAndFormatBookmarks } from "./sortAndFormatBookmarks.js";
import { renderBookmarks } from "./bookMarkCard.js";
import { bookmarksContainer } from "../config.js";
import { setData, getData } from "../data/storage.js";

export function updateUserBookmarks(user, bookmark) {
  if (user) {
    const existingData = getData(user.id) || user;
    existingData.bookmarks.push(bookmark);
    sortAndFormatBookmarks(existingData);
    user = existingData;
    setData(user.id, user);
    bookmarksContainer.innerHTML = "";
    renderBookmarks(user.bookmarks);
  }
  return user;
}
