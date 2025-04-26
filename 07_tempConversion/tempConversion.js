const convertToCelsius = function(tmp) {
  return roundToNearestTenth((tmp - 32) / 1.8);
};

const convertToFahrenheit = function(tmp) {
  return roundToNearestTenth((tmp * 1.8) + 32);
};

function roundToNearestTenth(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
