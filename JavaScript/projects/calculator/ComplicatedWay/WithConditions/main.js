// IS WORKING :D
// Program variables
var defaultResult = 0;
var currentResult = defaultResult;
var userInput = document.getElementById("input-number");
var currentResultOutput = document.getElementById("current-result");
var currentCalculationOutput = document.getElementById("current-calculation");

// HTML Manipulation Variables
var addBtn = document.getElementById("btn-add");
var subtractBtn = document.getElementById("btn-subtract");
var multiplyBtn = document.getElementById("btn-multiply");
var divideBtn = document.getElementById("btn-divide");
var powerBtn = document.getElementById("btn-power");

// Program Functions

function writeLog(
  operationIndentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIndentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function getNumber() {
  return parseInt(userInput.value);
}

function writeOutput(operator, resultBeforeCalc, calcNumber) {
  var calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function calculateResult(calculationType) {
  let enteredNumber = getNumber();
  let initialResult = currentResult;
  let operator = "";
  if (calculationType === "ADD") {
    currentResult = currentResult += enteredNumber;
    operator = "+";
  } else if (calculationType === "MULTIPLY") {
    currentResult = currentResult *= enteredNumber;
    operator = "*";
  } else if (calculationType === "SUBTRACT") {
    currentResult = currentResult -= enteredNumber;
    operator = "-";
  } else if (calculationType === "DIVIDE") {
    currentResult = currentResult /= enteredNumber;
    operator = "/";
  } else if (calculationType === "POWER") {
    currentResult = currentResult ** enteredNumber;
    operator = "**";
  }
  writeOutput(operator, initialResult, enteredNumber);
  writeLog(operator, initialResult, enteredNumber, currentResult);
}

function power() {
  calculateResult("POWER");
}

function add() {
  calculateResult("ADD");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

function subtract() {
  calculateResult("subtract");
}

// Math Operators
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
powerBtn.addEventListener("click", power);
