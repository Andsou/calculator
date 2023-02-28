"use strict";

const numbers = [];
let sum = 0;

const resultScreen = document.querySelector("#result-numbers");
const number = document.querySelectorAll(".number");
const addBtn = document.querySelector(".btn--add");
const subtractBtn = document.querySelector(".btn--subtract");
const multiplyBtn = document.querySelector(".btn--multiply");
const divideBtn = document.querySelector(".btn--divide");
const equalsOperator = document.querySelector(".btn--equals");
const operatorBtns = document.querySelectorAll(".btn--operate");

const add = (number1, number2) => {
  return number1 + number2;
};
const subtract = (number1, number2) => {
  return number1 - number2;
};
const multiply = (number1, number2) => {
  return number1 * number2;
};
const divide = (number1, number2) => {
  return number1 / number2;
};

/**
 *
 * @param {*} operator
 * @param {*} number1
 * @param {*} number2
 */
const operate = (operator, number1, number2) => {
  switch (operator) {
    case "+":
      sum = add(number1, number2);
      break;
    case "-":
      sum = subtract(number1, number2);
    case "*":
      sum = multiply(number1, number2);
    case "/":
      sum = divide(number1, number2);
      break;
  }

  return sum;
};

/**
 * Displays the numbers and result on the display of the calculator
 */
const displayResults = () => {
  let operation = "";

  operatorBtns.forEach((operator) =>
    operator.addEventListener("click", () => {
      operation = operator.value;
      console.log(operator.value);
      document.querySelector(".btn--equals").addEventListener("click", () => {
        resultScreen.value = operate(operation, 1, 2);
        numbers.join("");
        console.log(numbers);
      });
    })
  );

  number.forEach((button) => {
    button.addEventListener("click", () => {
      if (numbers.length < 11) {
        numbers.push(button.value);
        resultScreen.value += "" + button.value;
      }
    });
  });
};

/**
 * Clears the display of the calculator
 */
const clearScreen = () => {
  while (numbers.length > 0) {
    numbers.pop();
  }

  resultScreen.value = "";
};
document.querySelector(".btn--clear").addEventListener("click", clearScreen);

displayResults();
