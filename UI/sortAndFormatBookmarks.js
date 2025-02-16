import { formatDate } from "./formatDate.js";
export function sortAndFormatBookmarks(existingData) {
  existingData.bookmarks.sort((a, b) => new Date(b.date) - new Date(a.date));
  existingData.bookmarks = existingData.bookmarks.map((bookmark) => ({
    ...bookmark,
    date: formatDate(new Date(bookmark.date)),
  }));
}
