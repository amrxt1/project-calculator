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
  var x = operate(Number(prevOperand), operator, Number(currentOperand));
  secondaryScreen.textContent = x;
  prevOperand = x;
}
