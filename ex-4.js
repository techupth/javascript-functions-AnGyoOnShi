// Start coding here
let calculator = {};
calculator.add = function (a, b) {
  return a + b;
};
calculator.subtract = function (a, b) {
  return a - b;
};
calculator.multiply = function (a, b) {
  return a * b;
};
calculator.divide = function (a, b) {
  return a / b;
};

let addResult = calculator.add(10,20);
console.log(addResult);

let divideResult = calculator.divide(3000,10);
console.log(divideResult);