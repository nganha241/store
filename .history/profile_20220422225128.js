const list = document.querySelectorAll(".list .list-profile");
const list_detail = document.querySelectorAll(".list-detail .info");

let valueIndex = 0;
let currentIndex;

function showProfile(n) {
  list_detail[n].classList.remove("hide");
}

list.forEach((e, index) => {
  e.addEventListener("click", () => {
    currentIndex = valueIndex;
    valueIndex = index;

    list_detail[valueIndex].classList.remove("hide");
  });
});
