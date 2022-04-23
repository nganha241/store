const banners = document.querySelectorAll(".img-banner .image img");
const slider = document.querySelector(".slider img");

let countIndex;

setInterval(
  banners.forEach((banner, index) => {
    countIndex = index;
    slider.src = banner.src;
  }),
  1000
);

// function show() {
//   banners.forEach((banner, index) => {
//     countIndex = index;
//     slider.src = banner.src;
//     console.log(banner.src);
//   });
// }
// show();
