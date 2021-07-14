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

// populate display screen with key press

const digits = [
  ...document.querySelectorAll(
    '.container__calculator__display__calculator__keypad__digit'
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

digits.forEach((digit) => {
  digit.addEventListener('click', resultDisplay);
});

function resultDisplay() {
  if (result.textContent.length <= 16) {
    workingResult = result.textContent.replace(/[^\d]/g, '');
    displayResult = +(workingResult += this.textContent);
    result.textContent = displayResult.toLocaleString();
  }
}
operator.forEach((oper) => {
  oper.addEventListener('click', operationDisplay);
});

function operationDisplay() {
  if (result.textContent.length === 0 || (result.textContent = 0)) {
    operation.textContent = `${0} ${this.textContent} `;
  }
  operation.textContent = `${displayResult.toLocaleString()} ${
    this.textContent
  }`;
}

const clearE = document.querySelector(
  '.container__calculator__display__calculator__keypad__ce'
);

clearE.addEventListener('click', () => {
  result.textContent = '';
  operation.textContent = '';
});
