// calc

// operator functions

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const fraction = (a) => 1 / a;
const percentage = (a, b) => (b / 100) * a;
const square = (a) => a ** 2;
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
const mainScreen = document.querySelector(
  '.container__calculator__display__calculator__screen__main'
);
const secondaryScreen = document.querySelector(
  '.container__calculator__display__calculator__screen__secondary'
);

let operandA = '';
let operandB = '';
let operandTemp = '';
let currentOperator = '';
let noCommaResult = '';
let displayResult = '';
let removeToLocaleString = /([^e\d+.-])/g;
let nextOperand;
let disableOperator;
let done;

operands.forEach((operand) => {
  operand.addEventListener('click', displayOperand);
});

function displayOperand() {
  if (nextOperand === true) {
    mainScreen.textContent = '';
  } else if (done === true) {
    mainScreen.textContent = '';
    secondaryScreen.textContent = '';
    operandB = '';
    operandA = '';
    operandTemp = '';
    currentOperator = '';
  }
  if (mainScreen.textContent.length <= 16) {
    noCommaResult = mainScreen.textContent.replace(removeToLocaleString, '');
    displayResult = +(noCommaResult += this.textContent);
    mainScreen.textContent = displayResult.toLocaleString();
  }
  operandB = mainScreen.textContent.replace(removeToLocaleString, '');
  operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
  nextOperand = false;
  disableOperator = false;
  done = false;
}

operator.forEach((oper) => {
  oper.addEventListener('click', displayOperator);
});

function displayOperator() {
  operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
  if (done === true) {
    operandB = '';
    operandA = '';
  } else {
    executeOperate();
    disableOperator = true;
  }
  operandA = operandTemp;
  if (mainScreen.textContent === '0') {
    secondaryScreen.textContent = `${0} ${this.textContent} `;
  } else {
    secondaryScreen.textContent = `${operandTemp} ${this.textContent}`;
  }
  currentOperator = this;
  nextOperand = true;
}

const clearE = document.querySelector(
  '.container__calculator__display__calculator__keypad__ce'
);
const clear = document.querySelector(
  '.container__calculator__display__calculator__keypad__c'
);
const backspace = document.querySelector(
  '.container__calculator__display__calculator__keypad__backspace'
);

clearE.addEventListener('click', () => {
  mainScreen.textContent = '0';
  secondaryScreen.textContent = '';
  operandB = '';
  operandA = '';
  currentOperator = '';
});
clear.addEventListener('click', () => {
  mainScreen.textContent = '0';
});
backspace.addEventListener('click', () => {
  mainScreen.textContent = (+mainScreen.textContent
    .replace(removeToLocaleString, '')
    .slice(0, -1)).toLocaleString();
  operandB = mainScreen.textContent.replace(removeToLocaleString, '');
  operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
});

const equal = document.querySelector(
  '.container__calculator__display__calculator__keypad__equal'
);

equal.addEventListener('click', executeOperate);

function executeOperate() {
  if (currentOperator === '') {
    secondaryScreen.textContent = `${mainScreen.textContent.replace(
      removeToLocaleString,
      ''
    )} =`;
  } else if (operandA === '') {
    operateOnOperator();
  } else {
    operateEquals();
  }
  operandA = '';
  operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
  done = true;
}

function operateEquals() {
  operationResult = operate(+operandA, currentOperator.value, +operandB);
  if (
    operationResult.toString().length > 16 ||
    /([e+.])/g.test(operationResult) === true
  ) {
    mainScreen.textContent = operationResult;
  } else {
    mainScreen.textContent = operationResult.toLocaleString();
  }
  secondaryScreen.textContent = `${operandA} ${currentOperator.textContent} ${operandB} =`;
}

function operateOnOperator() {
  operationResult = operate(+operandTemp, currentOperator.value, +operandB);
  if (
    operationResult.toString().length > 16 ||
    /([e+.])/g.test(operationResult) === true
  ) {
    mainScreen.textContent = operationResult;
  } else {
    mainScreen.textContent = operationResult.toLocaleString();
  }
  secondaryScreen.textContent = `${operandTemp} ${currentOperator.textContent} ${operandB} =`;
  operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
}

const xoperators = [
  ...document.querySelectorAll(
    '.container__calculator__display__calculator__keypad__xoperator'
  ),
];

xoperators.forEach((xoperator) => {
  xoperator.addEventListener('click', test);
});

function test() {
  mainScreen.textContent = xoperate(+operandTemp, this.value);
  operandTemp = (+mainScreen.textContent).toLocaleString();
}
