const btn = document.querySelector(".btn");
const pop = document.querySelector(".popup");
const container = document.querySelector(".main-container");
const wrong = document.querySelector(".popup-icon");
btn.addEventListener("click", () => {
  container.classList.add("active");
  pop.classList.remove("active");
});
wrong.addEventListener("click", () => {
  pop.classList.add("active");
  container.classList.remove("active");
});
