import { bookmarksContainer } from "../config.js";
import { createElement } from "./createElement.js";

function createBookmarkCard(bookmark) {
  const bookmarkCard = document.createElement("section");
  const titleEl = createElement(bookmark.title, "a");
  titleEl.setAttribute("href", bookmark.url);

  const titleP = document.createElement("p");
  titleP.append(titleEl);

  const descEl = createElement(bookmark.description, "p");
  const dateEl = createElement(bookmark.date, "p");

  bookmarkCard.append(titleP, descEl, dateEl);

  bookmarkCard.classList.add("bookmark-card");

  return bookmarkCard;
}

export function renderBookmarks(bookmarks) {
  const bookmarkList = bookmarks.map(createBookmarkCard);
  bookmarksContainer.append(...bookmarkList);
}
