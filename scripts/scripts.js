// calc

// operator functions

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const fraction = (a) => 1 / a;
const percent = (a, b) => (b / 100) * a;
const square = (a) => a ** 2;
const root = (a) => Math.sqrt(a);

const operators = [
  { add },
  { subtract },
  { multiply },
  { divide },
  { fraction },
  { percent },
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
let decimalTemp;
let decimalCheck;
let nextOperand;
let disableOperator;
let doneOperateOnX;
let done;

const operands = [
  ...document.querySelectorAll(
    '.container__calculator__display__calculator__keypad__operand'
  ),
];

function displayOperand() {
  if (nextOperand === true && decimalCheck === false) {
    mainScreen.textContent = '';
  } else if (
    (done === true || doneOperateOnX === true) &&
    decimalCheck === false
  ) {
    clear();
  }
  if (mainScreen.textContent.length <= 16) {
    noCommaResult = mainScreen.textContent.replace(removeToLocaleString, '');
    displayResult = +(noCommaResult += this.textContent);
    mainScreen.textContent = displayResult.toLocaleString();
  }
  operandB = mainScreen.textContent.replace(removeToLocaleString, '');
  if (decimalCheck === true) {
    if (operandA === '') {
      operandB = decimalTemp;
    }
  }
  operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
  nextOperand = false;
  disableOperator = false;
  done = false;
  doneOperateOnX = false;
}

operands.forEach((operand) => {
  operand.addEventListener('click', displayOperand);
});

const operator = [
  ...document.querySelectorAll(
    '.container__calculator__display__calculator__keypad__operator'
  ),
];

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

operator.forEach((operator) => {
  operator.addEventListener('click', displayOperator);
});

const equal = document.querySelector(
  '.container__calculator__display__calculator__keypad__equal'
);

function checkForExpLength(temp) {
  if (temp.toString().length > 16 || /([e+.-])/g.test(temp) === true) {
    mainScreen.textContent = temp;
  } else {
    mainScreen.textContent = temp.toLocaleString();
  }
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
  decimalCheck = false;
  done = true;
}

equal.addEventListener('click', executeOperate);

const clearAll = document.querySelector(
  '.container__calculator__display__calculator__keypad__c'
);

function clear() {
  mainScreen.textContent = '0';
  secondaryScreen.textContent = '';
  operandB = '';
  operandA = '';
  currentOperator = '';
  operandTemp = '';
}

clearAll.addEventListener('click', clear);

const clearEntry = document.querySelector(
  '.container__calculator__display__calculator__keypad__ce'
);

clearEntry.addEventListener('click', () => {
  mainScreen.textContent = '0';
});

const clearLastInput = document.querySelector(
  '.container__calculator__display__calculator__keypad__backspace'
);

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

clearLastInput.addEventListener('click', backspace);

const xOperators = [
  ...document.querySelectorAll(
    '.container__calculator__display__calculator__keypad__x_operator'
  ),
];

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
  decimalCheck = false;
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

xOperators.forEach((xOperator) => {
  xOperator.addEventListener('click', executeOperateOnX);
});

const percentage = document.querySelector(
  '.container__calculator__display__calculator__keypad__percentage'
);

function takePercentage() {
  if (operandA === '' && secondaryScreen.textContent === '') {
    mainScreen.textContent = '0';
  } else if (operandA === '') {
    mainScreen.textContent = operate(+operandTemp, 'percent', +operandTemp);
    operandB = mainScreen.textContent.replace(removeToLocaleString, '');
  } else {
    mainScreen.textContent = operate(+operandA, 'percent', +operandB);
    operandB = mainScreen.textContent.replace(removeToLocaleString, '');
  }
}

percentage.addEventListener('click', takePercentage);

const negative = document.querySelector(
  '.container__calculator__display__calculator__keypad__negative'
);

function addRemoveNegative() {
  if (/([-])/g.test(mainScreen.textContent) === true) {
    mainScreen.textContent = mainScreen.textContent.replace(/([-])/g, '');
  } else {
    mainScreen.textContent = `-${mainScreen.textContent.slice(0)}`;
    operandB = mainScreen.textContent.replace(removeToLocaleString, '');
    operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
  }
}

negative.addEventListener('click', addRemoveNegative);

const decimal = document.querySelector(
  '.container__calculator__display__calculator__keypad__decimal'
);

function addDecimal() {
  if ((done === true || doneOperateOnX === true) && decimalCheck === false) {
    decimalTemp = operandB;
    mainScreen.textContent = '0.';
    decimalCheck = true;
    done = false;
  } else if (/([.])/g.test(mainScreen.textContent) === false) {
    mainScreen.textContent += '.';
  }
}

decimal.addEventListener('click', addDecimal);

// simple chalkboard

const context = document.querySelector(
  '.container__calculator__display__chalkboard__canvas__context'
);

const canvas = document.querySelector(
  '.container__calculator__display__chalkboard__canvas'
);

let cbx = context.getContext('2d');
context.width = canvas.clientWidth;
context.height = canvas.clientHeight;
cbx.strokeStyle = '#f6f4f1';
cbx.lineJoin = 'round';
cbx.lineWidth = 3;

const position = (coords) => [
  coords.pageX - context.offsetLeft,
  coords.pageY - context.offsetTop,
];

const startDrawing = (coords) => {
  cbx.beginPath();
  cbx.moveTo.apply(cbx, coords);
  cbx.stroke();
};

const keepDrawing = (coords) => {
  cbx.lineTo.apply(cbx, coords);
  cbx.stroke();
};

const mouseClick = (e) => startDrawing(position(e));

const mouseHold = (e) => keepDrawing(position(e));

const draw = (action, mousemove, mouseup) => (e) => {
  if (action == 'add') {
    mouseClick(e);
  }
  e.preventDefault();
  canvas[action + 'EventListener'](mousemove, mouseHold);
  canvas[action + 'EventListener'](mouseup, cbx.closePath);
};

canvas['addEventListener']('mousedown', draw('add', 'mousemove', 'mouseup'));

canvas.addEventListener('mouseup', draw('remove', 'mousemove', 'mouseup'));

//
