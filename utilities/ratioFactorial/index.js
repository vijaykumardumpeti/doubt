let factorialOfNumber = require("../factorial/index"); //factorial function
let ratioOfTwoNumbers = require("../ratio/index"); // ratio function

let ratioAndFactorial = (num1, num2, num3) => {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial = factorialOfNumber(num3);

  return { ratio, factorial };
};


module.exports = ratioAndFactorial;

