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
const sizes = document.querySelectorAll(".size button");
let current;
let valueIndex;

function addActive(n, x) {
  if (n !== current) {
    x[n].classList.add("active");
    x[current].classList.remove("active");
  }
}

colors.forEach((c, index) => {
  c.addEventListener("click", () => {
    current = valueIndex;
    valueIndex = index;
    addActive(valueIndex, colors);
  });
});

sizes.forEach((c, index) => {
  c.addEventListener("click", () => {
    current = valueIndex;
    valueIndex = index;
    addActive(valueIndex);
  });
});
