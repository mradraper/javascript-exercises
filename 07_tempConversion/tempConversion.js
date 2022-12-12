const convertToCelsius = function(farenheitEntry) {
  celsiusResultLong = (farenheitEntry - 32) * (5/9);
  // Converts the farenheit entry into celsius.

  celsiusResult = Math.round(celsiusResultLong * 10) / 10;
  // Round the celsius number to one decimal point.

  return celsiusResult;
};

const convertToFahrenheit = function(celsiusEntry) {
  farenheitResultLong = (celsiusEntry * (9/5)) + 32;
  // Converts the celsius entry into farenheit.

  farenheitResult = Math.round(farenheitResultLong * 10) / 10;
  // Round the celsisu number to one decimal point.
  
  return farenheitResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
