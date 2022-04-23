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
}

next.addEventListener("click", () => {
  currentIndex = countIndex;
  countIndex++;

  if (countIndex > slides.length - 1) {
    countIndex = 0;
  }
  showSlide(countIndex);
});

pre.addEventListener("click", () => {
  currentIndex = countIndex;
  countIndex--;

  if (countIndex < 0) {
    countIndex = slides.length - 1;
  }
  showSlide(countIndex);
});

const saleCard = document.querySelector(".sale-card");
const saleBox = document.getElementsByClassName("sale-box");
const salePre = document.querySelector(".sale-control.sale-pre");
const saleNext = document.querySelector(".sale-control.sale-next");

saleNext.addEventListener("click", () => {
  saleCard.append(saleBox[0]);
  console.log(saleBox[0]);
});
