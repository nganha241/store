const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");

let countIndex = 0;
let currentIndex;
let plus;
let currentPlus;

function showSlide(n) {
  slides[n].classList.add("show");
  if (currentIndex !== n) {
    slides[currentIndex].classList.remove("show");
  }

  if (n > slides.length) {
    countIndex = 1;
  }
  if (n < 1) {
    countIndex = slides.length;
  }
  slides.forEach((slide) => {
    slide[i].classList.add("show");
  });
}

next.addEventListener("click", () => {
  currentIndex = countIndex;
  countIndex++;
  showSlide(countIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    currentIndex = countIndex;
    countIndex = index;
    dot.classList.add("active");

    if (currentIndex !== countIndex) {
      dots[currentIndex].classList.remove("active");
    }
    showSlide(countIndex);
  });
});
