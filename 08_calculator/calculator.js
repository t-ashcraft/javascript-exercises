const add = function() {
  return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
	const arr = Array.from(arguments[0]);
	return arr.reduce((total, cur) => {
    return total + cur;
  }, 0);
};

const multiply = function() {
  const arr = Array.from(arguments[0]);
	return arr.reduce((total, cur) => {
    return total * cur;
  }, 1);
};

const power = function() {
	return Math.pow(arguments[0], arguments[1]);
};

const factorial = function() {
  let r = 1;
	for (let i = 1; i <= arguments[0];i++) {
    r *= i;
  }
  return r;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
