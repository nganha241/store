const quantity_pre = document.querySelectorAll(".quantity-pre");
const quantity = document.querySelectorAll(".quantity");
const quantity_next = document.querySelectorAll(".quantity-next");
console.log(quantity);
let quantityValue = 1;

quantity_pre.forEach((e, index) => {
  e.addEventListener("click", () => {});
});

quantity_next.forEach((e, index) => {
  e.addEventListener("click", () => {
    quantityValue++;
    quantity[index].innerText = quantityValue;
  });
});
