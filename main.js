function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return divide(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "X":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return;
  }
}

let secondaryScreen = document.querySelector(".screenSecondary");
let primaryScreen = document.querySelector(".screenPrimary");

let prevOperand = "";
let currentOperand = "";
let operator = "";

const numberBtns = document.querySelectorAll(".num");
numberBtns.forEach((btn) => btn.addEventListener("click", transferVal));
function transferVal(e) {
  currentOperand += this.textContent;
  primaryScreen.textContent = currentOperand;
}
