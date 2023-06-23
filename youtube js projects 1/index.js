// setInterval(() => {
//   let a = new Date();
//   container.innerHTML = a.getSeconds();
//   container1.innerHTML = a.getMinutes();
//   container2.innerHTML = a.getHours();
// }, 1000);
let random = Math.floor(Math.random() * 11);
let random1 = Math.floor(Math.random() * 11);
const guestion = document.getElementById("text");
guestion.innerText = `what is ${random} multiply of ${random1}`;
const answer = random * random1;
const input = document.getElementById("input");
let score = JSON.parse(window.localStorage.getItem("score"));
if (!score) {
  score = 0;
}
const localStorage = () => {
  window.localStorage.setItem("score", JSON.stringify(score));
};

form.addEventListener("submit", () => {
  const user = +input.value;
  console.log(user);
  if (user === answer) {
    score++;
    localStorage();
  } else {
    score--;
    localStorage();
  }
});
const scores = document.getElementById("score");
scores.innerHTML = `score:${score}`;
// const form = document.getElementById("form");
