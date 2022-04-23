const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let countIndex = 0;
let currentIndex;

// showSlide(countIndex);

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
    showSlide(countIndex);
    console.log(currentIndex);
  });
});
