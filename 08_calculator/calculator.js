const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentNumber) => total + currentNumber, 0);
};

const multiply = function(...numbers) {
  let product = 1;
  for (const number of numbers) {
    product = product * number;
  };
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if(a === 0) {
    return 1;
  } 
  else {
    let result = 1;
    for(let i = 0; i < a; i++) {
      result *= (a - i);
    };
    return result;
  };
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
