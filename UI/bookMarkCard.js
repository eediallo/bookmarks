import { bookmarksContainer } from "../domQueries.js";
import { createElement, createAndAppendElement } from "./createElements.js";

function createBookmarkCard(bookmark) {
  const titleEl = createElement(bookmark.title, "a");
  titleEl.setAttribute("href", bookmark.url);

  const titleP = createAndAppendElement([titleEl], "p");
  const descEl = createElement(bookmark.description, "p");

  const dateEl = createElement(bookmark.date, "p");
  dateEl.style.fontWeight = "bold";

  const bookmarkCard = createAndAppendElement(
    [titleP, descEl, dateEl],
    "section"
  );

  bookmarkCard.classList.add("bookmark-card");

  return bookmarkCard;
}

export function renderBookmarks(bookmarks) {
  const bookmarkList = bookmarks.map(createBookmarkCard);
  bookmarksContainer.append(...bookmarkList);
}
