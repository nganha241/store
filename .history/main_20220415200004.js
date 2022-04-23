const banners = document.querySelectorAll(".img-banner .image");
const slider = document.querySelector(".slide img");

let countIndex;
banners.forEach((banner, index) => {
  countIndex = index;
  slider.src = banner.src;
  console.log(banner.src);
});

function show() {
  banners.forEach((banner, index) => {
    countIndex = index;
    slider.src = banner.src;
    console.log(banner.src);
  });
}
show();
