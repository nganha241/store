const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let countIndex = 0;
console.log(slides[1]);

function showSlide(n) {
  slides[n].classList.add("show");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    countIndex = index;
    showSlide(countIndex);
  });
});
