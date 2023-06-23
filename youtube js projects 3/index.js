const textarea = document.getElementById("textarea");
const char = document.getElementById("num");
const charr = document.getElementById("numm");
textarea.addEventListener("keyup", () => {
  calculation();
  decreament();
});
calculation()
function calculation() {
  char.innerHTML = textarea.value.length;
}
function decreament() {
  charr.innerHTML = 50 - textarea.value.length;
}
