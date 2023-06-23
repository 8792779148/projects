const btnel1 = document.querySelector(".btn");
const closeoconelem = document.querySelector(".closeicon");
const vedio = document.querySelector("video");
const trailerel2 = document.querySelector(".trailer-container ");
btnel1.addEventListener("click", () => {
  trailerel2.classList.remove("active");
});
closeoconelem.addEventListener("click", () => {
  trailerel2.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
