// calc

// operator functions

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const fraction = (a) => 1 / a;
const percentage = (a, b) => (b / 100) * a;
const square = (a, b) => a ** b;
const root = (a) => Math.sqrt(a);

const operators = [
  { add },
  { subtract },
  { multiply },
  { divide },
  { fraction },
  { percentage },
  { square },
  { root },
];

// operator call function

const operate = (a, input, b = 0) => {
  const result = operators.find((operator) => operator[input]);
  return result[input](a, b);
};

const xoperate = (b, input) => {
  const result = operators.find((operator) => operator[input]);
  return result[input](b);
};
// populate display screen with key press

const operands = [
  ...document.querySelectorAll(
    '.container__calculator__display__calculator__keypad__operand'
  ),
];
const operator = [
  ...document.querySelectorAll(
    '.container__calculator__display__calculator__keypad__operator'
  ),
];
const result = document.querySelector(
  '.container__calculator__display__calculator__screen__result'
);
const operation = document.querySelector(
  '.container__calculator__display__calculator__screen__operation'
);

let workingResult = '';
let displayResult = '';
let operandA = '0';
let operandB = '';
let currentOperator = '';
let nextOperand;
let done;

operands.forEach((operand) => {
  operand.addEventListener('click', resultDisplay);
});

function resultDisplay() {
  if (nextOperand === true) {
    result.textContent = '';
  } else if (done === true) {
    result.textContent = '';
    operation.textContent = '';
  }
  if (result.textContent.length <= 16) {
    workingResult = result.textContent.replace(/([^\d.])/g, '');
    displayResult = +(workingResult += this.textContent);
    result.textContent = displayResult.toLocaleString();
  }
  operandB = result.textContent.replace(/([^\d.])/g, '');
  nextOperand = false;
  done = false;
}
operator.forEach((oper) => {
  oper.addEventListener('click', operationDisplay);
});

function operationDisplay() {
  if (result.textContent === '0') {
    operation.textContent = `${0} ${this.textContent} `;
  } else {
    operation.textContent = `${displayResult.toLocaleString()} ${
      this.textContent
    }`;
    operandA = result.textContent.replace(/([^\d.])/g, '');
    currentOperator = this;
    nextOperand = true;
  }
}

const clearE = document.querySelector(
  '.container__calculator__display__calculator__keypad__ce'
);

clearE.addEventListener('click', () => {
  result.textContent = '';
  operation.textContent = '';
});

const equal = document.querySelector(
  '.container__calculator__display__calculator__keypad__equal'
);

equal.addEventListener('click', () => {
  let operationResult = operate(+operandA, currentOperator.value, +operandB);
  console.log(operationResult);
  if (operationResult.toString().length > 16) {
    result.textContent = operationResult.toExponential();
  } else {
    result.textContent = operationResult.toLocaleString();
  }
  operation.textContent = `${operandA} ${currentOperator.textContent} ${operandB} =`;
  done = true;
});

const xoperators = [
  ...document.querySelectorAll(
    '.container__calculator__display__calculator__keypad__xoperator'
  ),
];

xoperators.forEach((xoperator) => {
  xoperator.addEventListener('click', () => {
    console.log(this.value);
  });
});
