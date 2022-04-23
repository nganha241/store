const quantity_pre = document.querySelectorAll(".quantity-pre");
const quantity = document.querySelectorAll(".quantity");
const quantity_next = document.querySelectorAll(".quantity-next");
console.log(quantity);
let quantityValue = 1;

function showQuantity() {
  quantity.innerText = quantityValue;
}
showQuantity();
quantity_pre.forEach((e) => {
  e.addEventListener("click", () => {
    if (quantityValue > 1) {
      quantityValue--;
      showQuantity();
    }
  });
});

quantity_next.addEventListener("click", () => {
  quantityValue++;
  showQuantity();
});
