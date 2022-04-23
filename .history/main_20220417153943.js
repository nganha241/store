const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let countIndex = 1;

console.log(slides);
console.log(dots);

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    console.log(index);
  });
});
