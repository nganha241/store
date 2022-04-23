const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");
console.log(next);
let countIndex = 0;
let currentIndex;

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
    dots[currentIndex].classList.remove("active");
    showSlide(countIndex);
  });
});

console.log(countIndex);
next.addEventListener("click", () => {
  showSlide(countIndex);
});
