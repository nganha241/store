const banners = document.querySelectorAll(".img-banner .image");
const slider = document.querySelector(".slide img");

let countIndex;

function show() {
  banners.forEach((banner, index) => {
    countIndex = index;
    slider = banner.src;
  });
}
