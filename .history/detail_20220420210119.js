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
let valueIndex;

function addActive(n) {
  colors[n].classList.add("active");
  colors[current].classList.remove("active");
  // if (n === current) {
  //   colors[n].classList.remove("acitve");
  // }
}

colors.forEach((c, index) => {
  c.addEventListener("click", () => {
    current = valueIndex;
    valueIndex = index;
    addActive(valueIndex);
  });
});
