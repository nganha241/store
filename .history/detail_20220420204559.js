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
let current;
colors.forEach((c, index) => {
  c.addEventListener("click", () => {
    current = index;
    c.classList.add("active");
    colors[current].classList.remove("active");
  });
});
