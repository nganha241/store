const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let countIndex = 0;

console.log(slides);
console.log(dots);

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    countIndex = index;
    console.log(countIndex);
  });
});
