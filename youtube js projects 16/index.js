const btnel = document.querySelector(".btn");
const animeContainerel = document.querySelector(".anime-container");
const animeImgel = document.querySelector(".anime-img");
const animeNameel = document.querySelector(".anime-name");
btnel.addEventListener("click", async () => {
  try {
    btnel.disabled = true;
    const url = "https://api.catboys.com/img";
    animeImgel.src = "./spinner.svg";
    const response = await fetch(url);
    const data = await response.json();
    animeContainerel.style.display = "block";
    animeImgel.src = data.url;
    animeNameel.innerText = data.artist;
    btnel.disabled = false;
    console.log(data);
  } catch (error) {
    btnel.disabled = false;
    btnel.innerHTML = "get element";
    animeImgel.src = "";
    animeNameel.innerText = "failed to load image";
  }
});
