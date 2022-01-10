const pagination = document.querySelector("#pagination");
const labelsGroup = document.querySelectorAll("#pagination > label");
const pages = document.querySelector("#pages");
const radioBtn = document.querySelectorAll("#pages > input[type=radio]");
console.log(radioBtn);

let touchedStartX = 0;
let touchedEndX = 0;

let pageCurrent = 0;

pagination.addEventListener("click", changePage);

pages.addEventListener("touchstart", touchStart, false);
pages.addEventListener("touchend", touchEnd, false);

function changePage(e) {
  const item = e.target;

  if (item.nodeName === "LABEL") {
    console.log(item.dataset.page);
    goToPage(item.dataset.page - 1);
  }
}

function touchStart(e) {
  touchedStartX = e.changedTouches[0].screenX;
}

function touchEnd(e) {
  touchedEndX = e.changedTouches[0].screenX;

  touchedEndX < touchedStartX ? moveTo("next") : moveTo("prev");

  console.log({ touchedStartX: touchedStartX, touchedEndX: touchedEndX });
}

function moveTo(direction) {
  if (direction === "next" && pageCurrent < labelsGroup.length - 1) {
    goToPage(pageCurrent + 1);
  } else if (direction === "prev" && pageCurrent > 0) {
    goToPage(pageCurrent - 1);
  }
}

function goToPage(numOfPage) {
  labelsGroup[pageCurrent].classList.remove("lab-checkmark");
  labelsGroup[numOfPage].classList.add("lab-checkmark");
  radioBtn[numOfPage].checked = true;
  pageCurrent = numOfPage;
}
