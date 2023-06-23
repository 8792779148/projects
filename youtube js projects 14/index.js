const inputel = document.getElementById("input");
const infotextel = document.querySelector(".info-text");
const meaningCntainerEl = document.querySelector(".meaning-container");
const title = document.getElementById("title");
const meaning = document.getElementById("Meaning");
const audioel = document.getElementById("audio");

async function fetchApi(word) {
  try {
    infotextel.innerHTML = `searching the word ${word}`;
    infotextel.style.display = "block";
    meaningCntainerEl.style.display = "none";
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    if (data.title) {
      meaningCntainerEl.style.display = "block";
      infotextel.style.display = "none";
      title.innerText = word;
      meaning.innerText = "not available";
      audioel.style.display = "none";
      infotextel.style.display = "none";
    } else {
      infotextel.style.display = "none";
      meaningCntainerEl.style.display = "block";
      audioel.style.display = "inline-flex";
      title.innerText = data[0].word;
      meaning.innerText = data[0].meanings[0].definitions[0].definition;
      audioel.src = data[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
  }
}

inputel.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    fetchApi(e.target.value);
  }
});
