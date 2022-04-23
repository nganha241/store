const banners = document.querySelectorAll(".img-banner .image");
const slider_img = document.querySelectorAll("");

let countIndex;

function show() {
  banners.forEach((banner, index) => {
    countIndex = index;
  });
}
