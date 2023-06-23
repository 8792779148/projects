const nextel1 = document.querySelector(".next");
const images = document.querySelector("img");
const img_container = document.querySelector(".image-container ");
let current = 1;
nextel1.addEventListener("click", () => {
  current++;
  img();
});
function img() {
  if (current > images.length) {
    current = 1;
  } else {
    img_container.style.transform = `translateX(-${(current - 1) * 500}px)`;
  }
}
