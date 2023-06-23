const btnEl = document.querySelector(".btn");
const url = "https://api.quotable.io/random";
const quote = document.querySelector("#quote");
const author = document.querySelector(".author");

btnEl.addEventListener("click", async () => {
  try {
    quote.innerText = "loading....";
    author.innerText = "loading....";
    const response = await fetch(url);
    const result = await response.json();
    quote.innerText = result.content;
    author.innerText = `~ ${result.author}`;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});
