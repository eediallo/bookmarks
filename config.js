const formEl = document.querySelector(".form");
const userSelectEl = document.getElementById("user");
const createBookmarkBtn = document.querySelector(".create-bookmark-btn");

formEl.style.display = "none";

function toggleBookmarkFormAndButtonVisibility(isDisplayed) {
  if (!isDisplayed) {
    formEl.style.display = "block";
    createBookmarkBtn.style.display = "none";
  } else {
    formEl.style.display = "none";
    createBookmarkBtn.style.display = "block";
  }
}

export {
  formEl,
  userSelectEl,
  createBookmarkBtn,
  toggleBookmarkFormAndButtonVisibility,
};
