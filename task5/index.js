const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');

let currentNumber = '';
let previousNumber = '';
let operation = '';

const buttons = document.querySelectorAll('.number div');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    appendNumber(button.textContent);
  });
});

function appendNumber(number) {
  currentNumber += number;
  display1.textContent = currentNumber;
}

const clearAll = document.getElementById('allclear');
clearAll.addEventListener('click', () => {
  currentNumber = '';
  previousNumber = '';
  operation = '';
  display1.textContent = '';
  display2.textContent = '';
});

const clear = document.getElementById('clean');
clear.addEventListener('click', () => {
  currentNumber = '';
  display1.textContent = currentNumber;
});

const operators = document.querySelectorAll('.number div:nth-child(4n)');

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    selectOperation(operator.textContent);
  });
});

function selectOperation(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') {
    calculate();
  }
  operation = op;
  previousNumber = currentNumber;
  currentNumber = '';
  display2.textContent = previousNumber + ' ' + operation;
}

const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
  calculate();
});

function calculate() {
  if (previousNumber === '' || currentNumber === '') return;
  let result = 0;
  const prevNum = parseFloat(previousNumber);
  const currNum = parseFloat(currentNumber);
  switch (operation) {
    case '+':
      result = prevNum + currNum;
      break;
    case '-':
      result = prevNum - currNum;
      break;
    case '*':
      result = prevNum * currNum;
      break;
    case '/':
      if (currNum === 0) {
        alert('Error: Division by zero');
        return;
      }
      result = prevNum / currNum;
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  previousNumber = '';
  operation = '';
  display1.textContent = currentNumber;
  display2.textContent = '';
}
