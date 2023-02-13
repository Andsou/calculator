"use strict";

const numbers = [];

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
  operator = document.querySelectorAll(".btn--operate").forEach((button) => {
    button.addEventListener("click");
  });
};

/**
 * Displays the numbers on the display of the calculator
 */
const displayResults = () => {
  let resultScreen = document.querySelector(".result--number");

  document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click", () => {
      if (numbers.length < 11) {
        numbers.push(button.value);
        const number = document.createTextNode(button.value);
        resultScreen.appendChild(number);
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
};

document.querySelector(".btn--clear").addEventListener("click", clearScreen);

displayResults();
