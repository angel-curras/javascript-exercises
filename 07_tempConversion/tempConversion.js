const convertToCelsius = function(temperatureFahrenheit) {
  let celsius = (temperatureFahrenheit - 32) * 5 / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(temperatureCelsius) {
  let fahrenheit = (temperatureCelsius * 9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
