const img_container = document.querySelector(".container");
const btne1 = document.querySelector(".btn");
btne1.addEventListener("click", () => {
  imgNumber = 9;
  addimg();
});
function addimg() {
  for (let index = 0; index < imgNumber; index++) {
    const newelem = document.createElement("img");
    newelem.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    img_container.appendChild(newelem);
  }
}
