

const loadMoreBtn = document.getElementById("load-more-btn");
const newContent = document.getElementById("new-content");
var footer = document.getElementById("footer");

let isNewContentVisible = false;

loadMoreBtn.addEventListener("click", function () {
  if (isNewContentVisible) {
    newContent.style.opacity = "0";
    newContent.style.transform = "translateY(0)";
    loadMoreBtn.style.background = "white";
    setTimeout(function () {
      newContent.style.display = "none";
      loadMoreBtn.style.transform = "translateY(0)";
    }, 300);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    newContent.style.display = "block";
    setTimeout(function () {
      newContent.style.opacity = "1";
      newContent.style.transform = "translateY(0)";
      loadMoreBtn.style.transform = "translate(250%, 400%)";
      loadMoreBtn.style.background = "lightblue";
      newContent.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  isNewContentVisible = !isNewContentVisible;
});
