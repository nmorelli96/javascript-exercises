const add = function (a, b) {
  return parseInt(a + b);
};

const subtract = function (a, b) {
  return parseInt(a - b);
};

const sum = function (arr) {
  return arr.reduce((a, b) => a + b, 0)
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b, 1)
};

const power = function (a, b) {
  return parseInt(a ** b);
};

const factorial = function (num) {
  let result = num;
  if (num === 0) {
    return 1;
  }
  else {
    for (let i = num; i > 1; i--) {
      result *= (i - 1)
    }
    return result
  }
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
