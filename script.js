const pagination = document.querySelector("#pagination");
// console.log(pagination);

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

  for (let i = 0; i < classLabels.length; i++) {
    classLabels[i].classList.remove("lab-checkmark");

    if (i + 1 === Number(selectedPage)) {
      classLabels[i].classList.add("lab-checkmark");
    }
  }
}
