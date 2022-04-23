const quantity_pre = document.querySelectorAll(".quantity-pre");
const quantity = document.querySelectorAll(".quantity");
const quantity_next = document.querySelectorAll(".quantity-next");
console.log(quantity);
let quantityValue = 1;

function showQuantity(n) {
  //   quantity.forEach((e) => {
  //     e.innerText = quantityValue;
  //   });
  quantity[n].innerText = quantityValue;
}
showQuantity();

quantity_pre.forEach((e, index) => {
  e.addEventListener("click", () => {
    if (quantityValue > 1) {
      quantityValue--;
      showQuantity(index);
    }
  });
});

quantity_next.forEach((e, index) => {
  e.addEventListener("click", () => {
    console.log(index);
    if (quantityValue > 1) {
      quantityValue++;
      showQuantity();
    }
  });
});
