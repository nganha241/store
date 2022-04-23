const quantity_pre = document.querySelectorAll(".quantity-pre");
const quantity = document.querySelectorAll(".quantity");
const quantity_next = document.querySelectorAll(".quantity-next");
console.log(quantity);
let quantityValue = 1;

function showQuantity() {
  quantity.forEach((e) => {
    e.innerText = quantityValue;
  });
}
showQuantity();

quantity_pre.forEach((e) => {
  e.addEventListener("click", () => {
    if (quantityValue > 1) {
      quantityValue--;
      e.innerText = quantityValue;
    }
  });
});

quantity_next.forEach((e) => {
  e.addEventListener("click", () => {
    if (quantityValue > 1) {
      quantityValue++;
      e.innerText = quantityValue;
    }
  });
});
