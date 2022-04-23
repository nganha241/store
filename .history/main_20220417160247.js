const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let countIndex = 0;
let currentIndex;

if (currentIndex === 0) {
  showSlide(0);
}

function showSlide(n) {
  slides[n].classList.add("show");
  if (currentIndex !== n) {
    slides[currentIndex].classList.remove("show");
  }
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    currentIndex = countIndex;
    countIndex = index;
    dot.classList.add("active");
    showSlide(countIndex);
  });
});
