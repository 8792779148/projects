const kits = ["crash", "kits", "snare", "tom"];
const containere2 = document.querySelector(".main-container");
kits.forEach((element) => {
  const btne1 = document.createElement("button");
  btne1.classList.add("btn1");
  btne1.innerText = element;
  btne1.style.backgroundImage = "url(images/" + element + ".png";
  btne1.style.backgroundAttachment = "cover";
  containere2.appendChild(btne1);
  const audioe = document.createElement("audio");
  audioe.src = "sounds/" + element + ".mp3";
  containere2.appendChild(audioe);
  btne1.addEventListener("click", () => {
    audioe.play();
  });
});
