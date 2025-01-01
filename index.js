const input = document.getElementById("unit-input");
const conversionBtn = document.getElementById("conversion-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");

const conversionRates = {
  metersToFeet: 3.281,
  feetToMeters: 1 / 3.281,
  litersToGallons: 0.264,
  gallonsToLiters: 1 / 0.264,
  kilogramsToPounds: 2.204,
  poundsToKilograms: 1 / 2.204
};

function imperialMetricConvert(value, unit1, unit2) {
  const rateKey = unit1.toLowerCase() + 'To' + unit2.charAt(0).toUpperCase() + unit2.slice(1).toLowerCase();  
  const rate = conversionRates[rateKey];
  const result = value * rate;
  return result.toFixed(3);
}

function renderConversion(el, val, unit1, unit2) {
  const val1 = imperialMetricConvert(val, unit1, unit2);
  const val2 = imperialMetricConvert(val, unit2, unit1);
  el.textContent = `${val} ${unit1} = ${val1} ${unit2} | ${val} ${unit2} = ${val2} ${unit1}`;
}

conversionBtn.addEventListener("click", function(){
 let value = input.value ? input.value : 0
  renderConversion(lengthEl, value, "meters", "Feet")
  renderConversion(volumeEl, value, "liters", "gallons")
})
