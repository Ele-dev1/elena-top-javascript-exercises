const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let sum = 0;
	for (let num of numbers) {
    sum += num;
  }
  return sum;
};

const multiply = function(numbers) {
  let result = numbers.reduce((product, factor) => product * factor);
  return result;
};

const power = function(number, power) {
  return number **power;
};

const factorial = function(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
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
