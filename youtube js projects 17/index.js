const celel = document.getElementById("celcius");
const fahrenhite = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function compute(event) {
  let currentValue = event.target.value;
  console.log(event.target.name);
  switch (event.target.name) {
    case "celcius":
      kelvin.value = currentValue + (273.32).toFixed(2);
      fahrenhite.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "Fahrenheit":
      celel.value = (currentValue - 32) / (1.8).toFixed(2);
      kelvin.value = (currentValue - 32) / 1.8 + (273.32).toFixed(2);
      break;
    case "kelvin":
      celel.value = currentValue - (273.32).toFixed(2);
      fahrenhite.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;

    default:
      break;
  }
}
