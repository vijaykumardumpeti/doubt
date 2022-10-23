let factorialOfNumber = require("../factorial/index"); //factorial function
let ratioOfTwoNumbers = require("../ratio/index"); // ratio function

try {
  let ratioAndFactorial = (num1, num2, num3) => {
    let ratio = ratioOfTwoNumbers(num1, num2);
    let factorial = factorialOfNumber(num3);

    return { ratio: ratio, factorial: factorial };
  };

  module.exports = ratioAndFactorial;

  console.log(ratioAndFactorial(num1, num2, num3));
} catch (e) {
  console.log(`${e.message}`);
}
