const bodyE = document.querySelector("body");
bodyE.addEventListener("mousemove", (event) => {
  //   console.log(event.offsetX);
  const xpos = event.offsetX;
  const ypos = event.offsetY;
  const spane = document.createElement("span");
  spane.style.left = xpos + "px";
  spane.style.top = ypos + "px";
  let size = Math.random() * 100;

  spane.style.width = size + "px";
  spane.style.height = size + "px";

  bodyE.appendChild(spane);
  setTimeout(() => {
    spane.remove();
  }, 3000);
});
