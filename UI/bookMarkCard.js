import { createElement } from "./createElement.js";

function createBookmarkCard(user) {
  const bookmarkCard = document.createElement("section");
  for (const { url, title, description, date } of user.bookmarks) {
    const titleEl = createElement(title, "a");
    titleEl.setAttribute("href", url);

    const titleP = document.createElement("p");
    titleP.append(titleEl);

    const descEl = createElement(description, "p");
    const dateEl = createElement(date, "p");

    bookmarkCard.append(titleP, descEl, dateEl);
  }

  bookmarkCard.classList.add("bookmark-card");

  return bookmarkCard;
}

export { createBookmarkCard };
