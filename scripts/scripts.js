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

const operateOnX = (b, input) => {
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
let doneOperateOnX;
let done;

operands.forEach((operand) => {
  operand.addEventListener('click', displayOperand);
});

function displayOperand() {
  if (nextOperand === true) {
    mainScreen.textContent = '';
  } else if (done === true || doneOperateOnX === true) {
    clear();
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
  doneOperateOnX = false;
}

operator.forEach((operator) => {
  operator.addEventListener('click', displayOperator);
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
    secondaryScreen.textContent = `${0} ${this.textContent}`;
  } else {
    secondaryScreen.textContent = `${operandTemp} ${this.textContent}`;
  }
  currentOperator = this;
  nextOperand = true;
}

const equal = document.querySelector(
  '.container__calculator__display__calculator__keypad__equal'
);

equal.addEventListener('click', executeOperate);

function executeOperate() {
  if (
    secondaryScreen.textContent ===
      `${operandTemp} ${currentOperator.textContent}  =` &&
    operandB === ''
  ) {
    operandB = operandTemp;
  }
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
  checkForExpLength(operationResult);
  secondaryScreen.textContent = `${operandA} ${currentOperator.textContent} ${operandB} =`;
}

function operateOnOperator() {
  operationResult = operate(+operandTemp, currentOperator.value, +operandB);
  checkForExpLength(operationResult);
  secondaryScreen.textContent = `${operandTemp} ${currentOperator.textContent} ${operandB} =`;
  operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
}

function checkForExpLength(temp) {
  if (temp.toString().length > 16 || /([e+.-])/g.test(temp) === true) {
    mainScreen.textContent = temp;
  } else {
    mainScreen.textContent = temp.toLocaleString();
  }
}

const clearAll = document.querySelector(
  '.container__calculator__display__calculator__keypad__c'
);

const clearEntry = document.querySelector(
  '.container__calculator__display__calculator__keypad__ce'
);

const clearLastInput = document.querySelector(
  '.container__calculator__display__calculator__keypad__backspace'
);

clearAll.addEventListener('click', clear);

clearEntry.addEventListener('click', () => {
  mainScreen.textContent = '0';
});

clearLastInput.addEventListener('click', backspace);

function clear() {
  mainScreen.textContent = '0';
  secondaryScreen.textContent = '';
  operandB = '';
  operandA = '';
  currentOperator = '';
  operandTemp = '';
}

function backspace() {
  if (done === true || doneOperateOnX === true) {
    secondaryScreen.textContent = '';
  } else if (
    mainScreen.textContent.length <= 2 &&
    /([-])/g.test(mainScreen.textContent) === true
  ) {
    mainScreen.textContent = '0';
  } else {
    mainScreen.textContent = (+mainScreen.textContent
      .replace(removeToLocaleString, '')
      .slice(0, -1)).toLocaleString();
    operandB = mainScreen.textContent.replace(removeToLocaleString, '');
    operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
  }
}

const xOperators = [
  ...document.querySelectorAll(
    '.container__calculator__display__calculator__keypad__x_operator'
  ),
];

xOperators.forEach((xOperator) => {
  xOperator.addEventListener('click', executeOperateOnX);
});

function executeOperateOnX() {
  let xTemp = operandTemp;
  operandTemp = operateOnX(+operandTemp, this.value);
  operandB = operandTemp;
  if (
    operandTemp.toString().length > 16 ||
    /([e+.-])/g.test(operandTemp) === true
  ) {
    mainScreen.textContent = operandTemp;
    displayOperateOnX(xTemp, this.value);
  } else {
    mainScreen.textContent = operandTemp.toLocaleString();
    displayOperateOnX(xTemp, this.value);
  }
  doneOperateOnX = true;
}

function displayOperateOnX(temp, value) {
  let type = value;
  if (type === 'square') {
    secondaryScreen.textContent = `(${temp})²`;
  } else if (type === 'root') {
    secondaryScreen.textContent = `√(${temp})`;
  } else {
    secondaryScreen.textContent = `¹/(${temp})`;
  }
}

const negative = document.querySelector(
  '.container__calculator__display__calculator__keypad__negative'
);

negative.addEventListener('click', addRemoveNegative);

function addRemoveNegative() {
  if (/([-])/g.test(mainScreen.textContent) === true) {
    mainScreen.textContent = mainScreen.textContent.replace(/([-])/g, '');
  } else {
    mainScreen.textContent = `-${mainScreen.textContent.slice(0)}`;
    operandB = mainScreen.textContent.replace(removeToLocaleString, '');
    operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
  }
}
