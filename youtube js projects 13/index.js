const ratingEl = document.getElementsByClassName("rating");
const btnel = document.getElementById("btn");

const container = document.querySelector(".container");

let arr = Array.from(ratingEl);
let selectedRating = "";

arr.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    remove();
    selectedRating = event.target.innerText;
    console.log(event.target.innerText);
    event.target.parentNode.classList.add("active");
  });
});
function remove() {
  arr.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
btnel.addEventListener("click", () => {
  if (selectedRating !== "") {
    container.innerHTML = `<strong>Thankyou</strong>
    <br><br><strong>feedback:${selectedRating}</strong>`;
  }
});
