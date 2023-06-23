const btnEl = document.querySelector("#btn");
const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=";
const apiKey = "b1EIijGaOMZN+LM2qqV3oA==X5QEgVbhAqktXZV0";
const jokeEk = document.querySelector(".joke");
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
async function getjoke() {
  try {
    jokeEk.innerHTML = "upddating....";
    const response = await fetch(apiurl, options);
    const data = await response.json();
    jokeEk.innerHTML = data[0].joke;
  } catch (error) {
    jokeEk.innerHTML = "error happened try again....";
  }
}
btnEl.addEventListener("click", getjoke);
