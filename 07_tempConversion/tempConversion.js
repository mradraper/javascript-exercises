const convertToCelsius = function(farenheitEntry) {
  celsiusResultLong = (farenheitEntry - 32) * (5/9);
  celsiusResult = Math.round(celsiusResultLong * 10) / 10;
  return celsiusResult;
};

const convertToFahrenheit = function(celsiusEntry) {
  farenheitResultLong = (celsiusEntry * (9/5)) + 32;
  farenheitResult = Math.round(farenheitResultLong * 10) / 10;
  return farenheitResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
