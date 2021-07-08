//calc

document.onload = content();

//create content interface

function content() {
  const content = document.querySelector('.content');
  const container = document.createElement('div');
  const calculator = document.createElement('div');
  const description = document.createElement('div');
  container.className = 'content__container';
  calculator.className = 'content__container__calculator';
  description.className = 'content__container__description';
  content.appendChild(container);
  container.appendChild(calculator);
  container.appendChild(description);
}

//operator functions

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const fraction = (a) => 1 / a;
const percentage = (a, b) => (b / 100) * a;
const square = (a, b) => a ** b;
const root = (a) => Math.sqrt(a);

const operators = [
  { add: add },
  { subtract: subtract },
  { multiply: multiply },
  { divide: divide },
  { fraction: fraction },
  { percentage: percentage },
  { square: square },
  { root: root },
];

//operator call function

const operate = (a, input, b = 0) => {
  let result = operators.find((operator) => operator[input]);
  return result[input](a, b);
};

//
