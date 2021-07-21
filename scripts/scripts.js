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

const operate = (a, input, b = 0) => {
  const result = operators.find((operator) => operator[input]);
  return result[input](a, b);
};

const operateOnX = (b, input) => {
  const result = operators.find((operator) => operator[input]);
  return result[input](b);
};

// populate display screen with text from button press and store the values

const mainScreen = document.querySelector(
  '.container__main__calculator__display__calculator__screen__main'
);
const secondaryScreen = document.querySelector(
  '.container__main__calculator__display__calculator__screen__secondary'
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
let expanded;
let eraserIsActive;

const operands = [
  ...document.querySelectorAll(
    '.container__main__calculator__display__calculator__keypad__operand'
  ),
];

function displayOperand(keypress) {
  let currentElement = this;
  if (!(keypress.value === undefined)) currentElement = keypress;
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
    displayResult = +(noCommaResult +=
      this.textContent || currentElement.textContent);
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
    '.container__main__calculator__display__calculator__keypad__operator'
  ),
];

// get, store and display the current operator value

function displayOperator(keypress) {
  let currentElement = this;
  if (!(keypress.value === undefined)) currentElement = keypress;
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
    secondaryScreen.textContent = `${0} ${currentElement.textContent}`;
  } else {
    secondaryScreen.textContent = `${operandTemp} ${currentElement.textContent}`;
  }
  currentOperator = currentElement;
  nextOperand = true;
}

operator.forEach((operator) => {
  operator.addEventListener('click', displayOperator);
});

// call operator functions on stored values and display the result

const equal = document.querySelector(
  '.container__main__calculator__display__calculator__keypad__equal'
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

// clear data functions

const clearAll = document.querySelector(
  '.container__main__calculator__display__calculator__keypad__c'
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
  '.container__main__calculator__display__calculator__keypad__ce'
);

clearEntry.addEventListener('click', () => {
  mainScreen.textContent = '0';
});

const clearLastInput = document.querySelector(
  '.container__main__calculator__display__calculator__keypad__backspace'
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

// // call xoperator function on stored values and display the result

const xOperators = [
  ...document.querySelectorAll(
    '.container__main__calculator__display__calculator__keypad__x_operator'
  ),
];

function executeOperateOnX(keypress) {
  let xTemp = operandTemp;
  let currentElement = this;
  if (!(keypress.value === undefined)) currentElement = keypress;
  operandTemp = operateOnX(+operandTemp, currentElement.value);
  operandB = operandTemp;
  if (
    operandTemp.toString().length > 16 ||
    /([e+.-])/g.test(operandTemp) === true
  ) {
    mainScreen.textContent = operandTemp;
    displayOperateOnX(xTemp, currentElement.value);
  } else {
    mainScreen.textContent = operandTemp.toLocaleString();
    displayOperateOnX(xTemp, currentElement.value);
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

// get and display percentage of second value based on first

const percentage = document.querySelector(
  '.container__main__calculator__display__calculator__keypad__percentage'
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

// add negate to current number

const negate = document.querySelector(
  '.container__main__calculator__display__calculator__keypad__negate'
);

function addRemoveNegate() {
  if (/([-])/g.test(mainScreen.textContent) === true) {
    mainScreen.textContent = mainScreen.textContent.replace(/([-])/g, '');
  } else {
    mainScreen.textContent = `-${mainScreen.textContent.slice(0)}`;
    operandB = mainScreen.textContent.replace(removeToLocaleString, '');
    operandTemp = mainScreen.textContent.replace(removeToLocaleString, '');
  }
}

negate.addEventListener('click', addRemoveNegate);

// add decimal to current number

const decimal = document.querySelector(
  '.container__main__calculator__display__calculator__keypad__decimal'
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

// create canvas area

const canvas = document.querySelector(
  '.container__main__calculator__display__chalkboard__canvas'
);

const context = document.querySelector(
  '.container__main__calculator__display__chalkboard__canvas__context'
);

let cbx = context.getContext('2d');

function contextToCanvas() {
  context.width = canvas.clientWidth;
  context.height = canvas.clientHeight;
  cbx.strokeStyle = '#f6f4f1';
  cbx.lineJoin = 'round';
  cbx.lineWidth = 1;
  cbx.filter = 'blur(0.5px)';
}

contextToCanvas();

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

// button to expand canvas area

const expand = document.querySelector(
  '.container__main__calculator__display__chalkboard__title__expand'
);

function expandCanvas() {
  const calculator = document.querySelector(
    '.container__main__calculator__display__calculator'
  );
  const chalkboard = document.querySelector(
    '.container__main__calculator__display__chalkboard'
  );
  if (!expanded) {
    calculator.style.display = 'none';
    expand.setAttribute(
      'class',
      'container__main__calculator__display__chalkboard__title__expand--active'
    );
    chalkboard.style.width = '100%';
    canvas.style.width = '100%';
    contextToCanvas();
    expanded = true;
  } else {
    calculator.style.display = '';
    expand.setAttribute(
      'class',
      'container__main__calculator__display__chalkboard__title__expand'
    );
    chalkboard.style.width = '';
    canvas.style.width = '';
    contextToCanvas();
    expanded = false;
  }
}

expand.addEventListener('click', expandCanvas);

// clear, erase canvas button

const clearCanvas = document.querySelector(
  '.container__main__calculator__display__chalkboard__footer__clear'
);

clearCanvas.addEventListener('click', () => {
  cbx.clearRect(0, 0, context.width, context.height);
});

const eraserCanvas = document.querySelector(
  '.container__main__calculator__display__chalkboard__footer__eraser'
);

function eraserStyling() {
  if (!eraserIsActive) {
    cbx.strokeStyle = '#1f1f23';
    cbx.lineWidth = 12;
    eraserIsActive = true;
    eraserCanvas.setAttribute(
      'class',
      'container__main__calculator__display__chalkboard__footer__eraser--active'
    );
  } else {
    cbx.strokeStyle = '#f6f4f1';
    cbx.lineWidth = 1;
    eraserCanvas.setAttribute(
      'class',
      'container__main__calculator__display__chalkboard__footer__eraser'
    );
    eraserIsActive = false;
  }
}

eraserCanvas.addEventListener('click', eraserStyling);

// keyboard functionality

document.addEventListener('keydown', (e) => {
  const keys = document.querySelector(`button[data-key='${e.key}']`);
  switch (true) {
    case /\b(F9)\b/g.test(keys.getAttribute('data-key')):
      console.log('yo');
      addRemoveNegate();
      break;
    case /([\d])/g.test(keys.getAttribute('data-key')):
      displayOperand(keys);
      break;
    case /([-+*/])/g.test(keys.getAttribute('data-key')):
      displayOperator(keys);
      break;
    case /\b(Enter)\b/g.test(keys.getAttribute('data-key')):
      console.log('yo');
      executeOperate();
      break;
    case /([q@r])/g.test(keys.getAttribute('data-key')):
      executeOperateOnX(keys);
      break;
    case /([%])/g.test(keys.getAttribute('data-key')):
      takePercentage();
      break;
    case /\b(Escape)\b/g.test(keys.getAttribute('data-key')):
      clear();
      break;
    case /\b(Delete)\b/g.test(keys.getAttribute('data-key')):
      mainScreen.textContent = '0';
      break;
    case /\b(Backspace)\b/g.test(keys.getAttribute('data-key')):
      backspace();
      break;
    case /([.])/g.test(keys.getAttribute('data-key')):
      addDecimal();
      break;
  }
});

//
