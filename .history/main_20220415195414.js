const banners = document.querySelectorAll(".img-banner .image");

let countIndex;

function show() {
  banners.forEach((banner, index) => {
    countIndex = index;
  });
}
