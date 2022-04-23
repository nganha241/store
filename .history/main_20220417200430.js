const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");

let countIndex = 0;
let currentIndex;

function showSlide() {
  slides[currentIndex].classList.remove("show");
  slides[countIndex].classList.add("show");
  if (countIndex === 0) {
    pre.classList.add("click");
  } else {
    pre.classList.remove("click");
  }
}

next.addEventListener("click", () => {
  currentIndex = countIndex;
  countIndex++;
  showSlide();
});

pre.addEventListener("click", () => {
  currentIndex = countIndex;
  countIndex--;
  showSlide();
});
