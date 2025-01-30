function createBookmarkCard(user) {
  const bookmarkCard = document.createElement("section");
  for (const { url, title, description, date } of user.bookmarks) {
    const titleEl = document.createElement("a");
    titleEl.setAttribute("href", url);
    titleEl.textContent = title;

    const titleP = document.createElement("p");
    titleP.append(titleEl);

    const descEl = document.createElement("p");
    descEl.textContent = description;
    const dateEl = document.createElement("p");
    dateEl.textContent = date;

    bookmarkCard.append(dateEl, titleP, descEl);
  }

  bookmarkCard.classList.add("bookmark-card");

  return bookmarkCard;
}

export { createBookmarkCard };
