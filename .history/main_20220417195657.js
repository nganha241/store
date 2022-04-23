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

function showSlide(n) {
  slides.forEach((slide, index) => {
    currentIndex = index - 1;
    console.log(currentIndex);
    console.log(index);
    if (index === n) {
      slide.classList.add("show");
    }
  });
}

next.addEventListener("click", () => {
  currentIndex = countIndex;
  countIndex++;
  slides.forEach((slide, index) => {
    if (index === countIndex) {
      slide.classList.add("show");
      slides[currentIndex].classList.remove("show");
    }
  });

pre.addEventListener("click", () => {
    currentIndex = countIndex;
    countIndex--;
    slides.forEach((slide, index) => {
      if (index === countIndex) {
        slide.classList.add("show");
        slides[currentIndex].classList.remove("show");
      }
    });
  //   slides[countIndex].classList.add("show");
  //   slides[currentIndex].classList.remove("show");
  //   if (countIndex === slides.length - 1) {
  //     countIndex = 0;
  //   }
});

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", (e) => {
//     currentIndex = countIndex;
//     countIndex = index;
//     dot.classList.add("active");

//     if (currentIndex !== countIndex) {
//       dots[currentIndex].classList.remove("active");
//     }
//     showSlideDot(countIndex);
//   });

// });
