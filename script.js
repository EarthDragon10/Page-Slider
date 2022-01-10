const pagination = document.querySelector("#pagination");
const labelsGroup = document.querySelectorAll("#pagination > label");
const pages = document.querySelector("#pages");
const radioBtn = document.querySelectorAll("#pages > input[type=radio]");
console.log(radioBtn);

let touchedStartX = 0;
let touchedEndX = 0;

let pageCurrent = 0;

pagination.addEventListener("click", (e) => {
  const item = e.target;

  if (item.nodeName === "LABEL") {
    console.log(item.dataset.page);
    setCheckedLabel(item.dataset.page);
  }

  console.log(item.nodeName);
});

function setCheckedLabel(selectedPage) {
  console.log(classLabels);

  labelsGroup[pageCurrent - 1].classList.remove("lab-checkmark");
  labelsGroup[selectedPage - 1].classList.add("lab-checkmark");

  pageCurrent = selectedPage;
}

pages.addEventListener("touchstart", touchStart, false);
pages.addEventListener("touchend", touchEnd, false);

function touchStart(e) {
  touchedStartX = e.changedTouches[0].screenX;
}

function touchEnd(e) {
  touchedEndX = e.changedTouches[0].screenX;

  touchedEndX < touchedStartX ? moveTo("next") : moveTo("prev");

  console.log({ touchedStartX: touchedStartX, touchedEndX: touchedEndX });
}

function moveTo(direction) {
  if (direction === "next" && pageCurrent < labelsGroup.length) {
    labelsGroup[pageCurrent - 1].classList.remove("lab-checkmark");
    labelsGroup[pageCurrent].classList.add("lab-checkmark");
    radioBtn[pageCurrent].checked = true;
    pageCurrent++;
  } else if (direction === "prev" && pageCurrent > 1) {
    labelsGroup[pageCurrent - 1].classList.remove("lab-checkmark");
    labelsGroup[pageCurrent - 2].classList.add("lab-checkmark");
    radioBtn[pageCurrent - 2].checked = true;
    pageCurrent--;
  }
}

function goToPage(numOfPage) {
  labelsGroup[pageCurrent].classList.remove("lab-checkmark");
  labelsGroup[numOfPage].classList.add("lab-checkmark");
  radioBtn[numOfPage].checked = true;
  pageCurrent = numOfPage;
}
