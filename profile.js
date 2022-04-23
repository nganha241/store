const list = document.querySelectorAll(".list .list-profile");
const list_detail = document.querySelectorAll(".list-detail .info");

let valueIndex = 0;
let currentIndex;

list.forEach((e, index) => {
  e.addEventListener("click", () => {
    currentIndex = valueIndex;
    valueIndex = index;
    if (currentIndex != valueIndex) {
      list_detail[valueIndex].classList.remove("hide");
      list_detail[currentIndex].classList.add("hide");
    }
  });
});
