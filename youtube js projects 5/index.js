// first took container ouside

const container = document.querySelector(".container");

// lter created small div

for (let index = 0; index < 27; index++) {
  const color = document.createElement("div");
  color.classList.add("color-container");
  container.appendChild(color);
}

// color changing function

function colorchanger() {
  const totalcolor = "0123456789abcdef";
  let hash = "#";
  for (let index = 0; index < 6; index++) {
    hash = hash + totalcolor[Math.floor(Math.random() * 16)];
  }
  return hash;
}

// calling all divs

const allcolorcontat = document.querySelectorAll(".color-container");

// going through each loop and add color to

function col() {
  allcolorcontat.forEach((Element) => {
    let newx = colorchanger();
    Element.style.backgroundColor = newx;
    Element.innerHTML = newx;
  });
}
col();
