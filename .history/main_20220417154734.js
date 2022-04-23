const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let countIndex = 0;
let currentIndex;
console.log(slides[1]);

function showSlide(n) {
  slides[n].classList.add("show");
  slides[currentIndex].classList.remove("show");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    currentIndex = countIndex;
    countIndex = index;
    showSlide(countIndex);
    console.log(currentIndex);
  });
});
