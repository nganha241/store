const banners = document.querySelectorAll(".img-banner .image img");
const slider = document.querySelector(".slider img");

let countIndex = 0;
let currentIndex;

setInterval(
  banners.forEach((banner, index) => {
    currentIndex = countIndex;
    countIndex = index;
    console.log(currentIndex);
    console.log(countIndex);
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
