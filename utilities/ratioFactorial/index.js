let factorialOfNumber = require("../factorial/index"); //factorial function
let ratioOfTwoNumbers = require("../ratio/index"); // ratio function

let ratioAndFactorial = (num1, num2, num3) => {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial = factorialOfNumber(num3);

  return { ratio, factorial };
};

let num1 = 2;
let num2 = 2;
let num3 = 3;

module.exports = ratioAndFactorial;

console.log(ratioAndFactorial(num1, num2, num3));
