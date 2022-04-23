const list = document.querySelectorAll(".list .list-profile");
const list_detail = document.querySelectorAll(".list-detail .info");
console.log(list[1]);
function showProfile(n) {
  list_detail[n].classList.add("show");
}

list.forEach((e, index) => {
  e.addEventListener("click", () => {
    showProfile(index);
  });
});
