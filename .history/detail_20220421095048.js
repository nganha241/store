const quantity_pre = document.querySelector(".quantity-pre");
const quantity = document.querySelector(".quantity");
const quantity_next = document.querySelector(".quantity-next");

let quantityValue = 1;

function showQuantity() {
  quantity.innerText = quantityValue;
}
showQuantity();
quantity_pre.addEventListener("click", () => {
  if (quantityValue > 1) {
    quantityValue--;
    showQuantity();
  }
});

quantity_next.addEventListener("click", () => {
  quantityValue++;
  showQuantity();
});

const colors = document.querySelectorAll(".detail-color button");
const sizes = document.querySelectorAll(".detail-size button");
let currentColor;
let valueIndexColor;
let currentSize;
let valueIndexSize;

colors.forEach((c, index) => {
  c.addEventListener("click", () => {
    currentColor = valueIndexColor;
    valueIndexColor = index;
    if (currentColor !== valueIndexColor) {
      c.classList.add("active");
      colors[currentColor].classList.remove("active");
    }
  });
});

sizes.forEach((s, index) => {
  s.addEventListener("click", () => {
    currentSize = valueIndexSize;
    valueIndexSize = index;
    if (currentSize !== valueIndexSize) {
      s.classList.add("active");
      sizes[currentSize].classList.remove("active");
    }
  });
});

const imgs = document.querySelectorAll(".img-child img");
console.log(imgs);
