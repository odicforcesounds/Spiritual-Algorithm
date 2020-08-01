// IS WORKING :D 
// Program variables 
var defaultResult = 0; 
var currentResult = defaultResult;
var userInput = document.getElementById('input-number');
var currentResultOutput = document.getElementById('current-result');
var currentCalculationOutput = document.getElementById('current-calculation');

// HTML Manipulation Variables 
var addBtn = document.getElementById('btn-add');
var subtractBtn = document.getElementById('btn-subtract');
var multiplyBtn = document.getElementById('btn-multiply');
var divideBtn = document.getElementById('btn-divide');
var powerBtn = document.getElementById('btn-power');

// Program Functions 
function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function getNumber() {
  return parseInt(userInput.value);
}

function writeOutput(operator, resultBeforeCalc, calcNumber){
  var calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; 
  outputResult(currentResult, calcDescription);
}

function powerOn() {
  var enteredNumber = getNumber();
  var initialResult = currentResult;
  currentResult = currentResult**enteredNumber;
  writeOutput('**', initialResult, enteredNumber);
  console.log('FUCK');
}

function add() {
  var enteredNumber = getNumber();
  var initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  writeOutput('+', initialResult, enteredNumber);
}

function multiply() {
  var enteredNumber = getNumber();
  var initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  writeOutput('*', initialResult, enteredNumber);
}

function divide() {
  var enteredNumber = getNumber();
  var initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  writeOutput('/', initialResult, enteredNumber)
}

function subtract() {
  var enteredNumber = getNumber();
  var initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  writeOutput('-', initialResult, enteredNumber)
}

// Math Operators
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// WHy the NEXT line print an error? 
// powerBtn.addEventLIstener('click', powerOn);
