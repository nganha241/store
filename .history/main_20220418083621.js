const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");

let countIndex = 0;
let currentIndex;
let plus;
let currentPlus;

function showSlideDot(n) {
  slides[n].classList.add("show");
  if (currentIndex !== n) {
    slides[currentIndex].classList.remove("show");
  }
}

next.addEventListener("click", () => {
  currentIndex = countIndex;
  countIndex++;

  if (countIndex === slides.length - 1) {
    countIndex = 0;
  }
  showSlideDot(countIndex);
});

pre.addEventListener("click", () => {
  currentIndex = countIndex;
  countIndex--;

  if (countIndex < 0) {
    countIndex = slides.length - 1;
  }
  showSlideDot(countIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    currentIndex = countIndex;
    countIndex = index;
    dot.classList.add("active");

    if (currentIndex !== countIndex) {
      dots[currentIndex].classList.remove("active");
    }
    showSlideDot(countIndex);
  });
});
