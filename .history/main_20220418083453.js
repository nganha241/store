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
  showSlideDot(countIndex);
  if(countIndex===slides.length-1)
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
