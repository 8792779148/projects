const btnel = document.querySelector(".btn");
const Bmiinputel = document.querySelector("#bmiresult");
const weightcondition = document.querySelector("#weightcindition");

function calculateBMI() {
  const heightvalue = document.querySelector("#height").value / 100;
  const weightvalue = document.querySelector("#weight").value;
  //   console.log(heightvalue, weightvalue);
  const bmivalue = weightvalue / (heightvalue * heightvalue);
  //   console.log(bmivalue);
  Bmiinputel.value = bmivalue.toFixed(2);
  if (bmivalue < 18.5) {
    weightcondition.innerText = "Under weight";
  } else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
    weightcondition.innerText = "Normal weight";
  } else if (bmivalue > 25 && bmivalue <= 29.9) {
    weightcondition.innerText = "overweight";
  } else if (bmivalue >= 30) {
    weightcondition.innerText = "Obesity";
  }
}

btnel.addEventListener("click", calculateBMI);
