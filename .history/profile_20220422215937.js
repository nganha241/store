const list = document.querySelectorAll(".list .list-profile");
const list_detail = document.querySelectorAll(".list-detail .info");

list.forEach((e, index) => {
  e.addEventListener("click", () => {
    console.log(index);
  });
});
