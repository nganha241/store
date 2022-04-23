const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");

let countIndex = 0;
let currentIndex;
let plus;

function showSlide(n) {
  slides[n].classList.add("show");
  if (currentIndex !== n) {
    slides[currentIndex].classList.remove("show");
  }
  plus = n;
  next.addEventListener("click", () => {
    slides[plus++].classList.add("show");
    slides[plus].classList.remove("show");
  });
}

dots.forEach((dot, index) => {
  currentIndex = countIndex;
  countIndex = index;
  dot.addEventListener("click", (e) => {
    dot.classList.add("active");
    dots[currentIndex].classList.remove("active");
    showSlide(countIndex);
  });
});
