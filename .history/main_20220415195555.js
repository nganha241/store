const banners = document.querySelectorAll(".img-banner .image");
const slider = document.querySelector(".slider");

let countIndex;

function show() {
  banners.forEach((banner, index) => {
    countIndex = index;
  });
}
