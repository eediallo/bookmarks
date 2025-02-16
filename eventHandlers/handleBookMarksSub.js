import { userSelectEl, bookmarksContainer } from "../config.js";
import { renderBookmarks } from "../UI/bookMarkCard.js";
import { formatDate } from "../UI/formatDate.js";
import { USERS } from "../data/data.js";
import { getData, setData } from "../data/storage.js";

export function handleBookmarkSubmission(e) {
  e.preventDefault();

  const urlInput = document.getElementById("url");
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");

  const url = urlInput.value;
  const title = titleInput.value;
  const description = descriptionInput.value;
  const date = new Date();

  const bookmark = { url, title, description, date };

  const selectedUserName = userSelectEl.value;
  let user = USERS.find((user) => user.name === selectedUserName);
  if (user) {
    const existingData = getData(user.id) || user;
    existingData.bookmarks.push(bookmark);
    existingData.bookmarks.sort((a, b) => new Date(b.date) - new Date(a.date));
    existingData.bookmarks = existingData.bookmarks.map((bookmark) => ({
      ...bookmark,
      date: formate(new Date(bookmark.date)),
    }));
    user = existingData;
    setData(user.id, user);
    bookmarksContainer.innerHTML = "";
    renderBookmarks(user.bookmarks);
  }

  // Clear form fields after submission
  urlInput.value = "";
  titleInput.value = "";
  descriptionInput.value = "";
}

function formate(date) {
  // Format the date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
