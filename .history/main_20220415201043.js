const banners = document.querySelectorAll(".img-banner .image img");
const slider = document.querySelector(".slider img");

let countIndex = 0;
let currentIndex;

// setInterval(
//   banners.forEach((banner, index) => {
//     currentIndex = countIndex;
//     countIndex = index;
//     console.log(currentIndex);
//     console.log(countIndex);
//     slider.src = banner.src;
//   }),
//   1000
// );

banners.forEach((banner) => {
  currentIndex = countIndex;
  countIndex++;
  console.log(currentIndex);
  console.log(countIndex);
  slider.src = banner.src;
});
