//SLIDE1
// const imgs = document.querySelectorAll(".img-banner img");

// let indexValue = 0;

// function slideShowHeader() {
//   setTimeout(slideShowHeader, 3500);
//   imgs.forEach((img) => {
//     img.style.display = "none";
//   });
//   indexValue++;
//   if (indexValue > imgs.length) {
//     indexValue = 1;
//   }
//   imgs[indexValue - 1].style.display = "block";
// }
// slideShowHeader();

//SLIDE2
// const slides = document.querySelectorAll(".slide");
// const dots = document.querySelectorAll(".dot");
// const pre = document.querySelector(".pre");
// const next = document.querySelector(".next");

// let countIndex = 0;
// let currentIndex;

// function showSlide(n) {
//   slides[n].classList.add("show");
//   if (currentIndex !== n) {
//     slides[currentIndex].classList.remove("show");
//   }
// }

// next.addEventListener("click", () => {
//   currentIndex = countIndex;
//   countIndex++;

//   if (countIndex > slides.length - 1) {
//     countIndex = 0;
//   }
//   showSlide(countIndex);
// });

// pre.addEventListener("click", () => {
//   currentIndex = countIndex;
//   countIndex--;

//   if (countIndex < 0) {
//     countIndex = slides.length - 1;
//   }
//   showSlide(countIndex);
// });

// SLIDE3

// const saleCard = document.querySelector(".sale-card");
// const saleBox = document.getElementsByClassName("sale-box");
// const salePre = document.querySelector(".sale-control.sale-pre");
// const saleNext = document.querySelector(".sale-control.sale-next");

// saleNext.addEventListener("click", () => {
//   saleCard.append(saleBox[0]);
// });

// salePre.addEventListener("click", () => {
//   saleCard.prepend(saleBox[saleBox.length - 1]);
// });

const quantity_pre = document.querySelector(".quantity-pre");
const quantity = document.querySelector(".quantity");
const quantity_next = document.querySelector(".quantity-next");

let quantityValue = 1;

function showQuantity() {
  quantity.innerText = quantityValue;
}
showQuantity();
quantity_pre.addEventListener("click", () => {
  if (quantity !== 1) {
    quantityValue--;
    showQuantity();
  }
});

quantity_next.addEventListener("click", () => {
  quantityValue++;
  showQuantity();
});
