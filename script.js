const pagination = document.querySelector("#pagination");
// console.log(pagination);
let pageCurrent = 1;

pagination.addEventListener("click", (e) => {
  const item = e.target;

  if (item.nodeName === "LABEL") {
    console.log(item.dataset.page);
    setCheckedLabel(item.dataset.page);
  }

  console.log(item.nodeName);
});

function setCheckedLabel(selectedPage) {
  const classLabels = document.querySelectorAll("#pagination > label");
  console.log(classLabels);

  classLabels[pageCurrent - 1].classList.remove("lab-checkmark");
  classLabels[selectedPage - 1].classList.add("lab-checkmark");
  pageCurrent = selectedPage;
}
