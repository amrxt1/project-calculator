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
      return add(a, b);
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

const ac = document.querySelector(".ac");
ac.addEventListener("click", () => {
  currentOperand = "";
  primaryScreen.textContent = currentOperand;
  prevOperand = "";
  secondaryScreen.textContent = prevOperand;
});

const del = document.querySelector(".del");
del.addEventListener("click", () => {
  currentOperand = currentOperand.slice(0, currentOperand.length - 1);
  primaryScreen.textContent = currentOperand;
});

const numberBtns = document.querySelectorAll(".num");
numberBtns.forEach((btn) => btn.addEventListener("click", transferVal));
function transferVal(e) {
  currentOperand += this.textContent;
  primaryScreen.textContent = currentOperand;
}

const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((btn) => btn.addEventListener("click", calculate));
function calculate(e) {
  if (prevOperand && !currentOperand) {
    operator = this.textContent;
    secondaryScreen.textContent = prevOperand + " " + operator;
    return;
  }
  if (prevOperand && currentOperand) {
    operator = this.textContent;
    secondaryScreen.textContent = prevOperand + " " + operator;
    currentOperand = "";
    primaryScreen.textContent = currentOperand;
    return;
  }
  prevOperand = currentOperand;
  operator = this.textContent;
  secondaryScreen.textContent = prevOperand + " " + operator;
  currentOperand = "";
  primaryScreen.textContent = "";
}

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", equal);
function equal(e) {
  if (!prevOperand) {
    operator = "";
    secondaryScreen.textContent = currentOperand;
    prevOperand = currentOperand;
    currentOperand = "";
    primaryScreen.textContent = "";
    return;
  }
  if (!operator) {
    displayError();
    return;
  }
  if (operator === "/") {
    if (currentOperand === "0") {
      displayError();
      return;
    }
  }
  if (!currentOperand) {
    displayError();
    return;
  }
  var x = operate(Number(prevOperand), operator, Number(currentOperand));
  x = Math.round(x * 1000) / 1000;
  secondaryScreen.textContent = x;
  prevOperand = x;
  primaryScreen.textContent = "";
}

function displayError() {
  primaryScreen.textContent = "INVALID Syntax";
}

const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
  if (currentOperand.indexOf(".") > 0) {
    return;
  }
  currentOperand = currentOperand.concat(".");
  primaryScreen.textContent = currentOperand;
});
