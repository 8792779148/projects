const currencyFirstEl = document.querySelector("#currency-first");
const worthForstEl = document.querySelector("#worth-first");
const currencySecondEl = document.querySelector("#currency-second");
const worthsecondEl = document.querySelector("#worth-second");
const exchangeRateEl = document.querySelector(".exchange-rate");
async function updateRaate() {
  //   fetch(
  //     ` https://v6.exchangerate-api.com/v6/05bbf1973e2dc33243d03fc4/latest/${currencyFirstEl.value}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  const url = ` https://v6.exchangerate-api.com/v6/05bbf1973e2dc33243d03fc4/latest/${currencyFirstEl.value}`;
  const reponse = await fetch(url);
  const data = await reponse.text();
  console.log(data);
}
currencyFirstEl.addEventListener("change", updateRaate);
currencySecondEl.addEventListener("change", updateRaate);
worthForstEl.addEventListener("input", updateRaate);
