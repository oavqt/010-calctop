// calc

// create content interface

function cContainer() {
  const container = document.querySelector('.container');
  const calculator = document.createElement('div');
  const information = document.createElement('div');
  calculator.className = 'container__calculator';
  information.className = 'container__information';
  container.appendChild(calculator);
  container.appendChild(information);
}

function cCalculator() {
  const calculator = document.querySelector('.container__calculator');
  const bar = document.createElement('div');
  const container = document.createElement('div');
  bar.className = 'container__calculator__bar';
  container.className = 'container__calculator__display';
  calculator.appendChild(bar);
  calculator.appendChild(container);
}

function cCalculatorTopBar() {
  const bar = document.querySelector('.container__calculator__bar');
  const title = document.createElement('h1');
  title.className = 'container__calculator__bar__title';
  title.textContent = 'Calculator';
  bar.appendChild(title);
  for (let i = 0; i < 3; i++) {
    const button = document.createElement('button');
    button.className = 'container__calculator__bar__button';
    bar.appendChild(button);
  }
}

function cCalculatorContainer() {
  const container = document.querySelector('.container__calculator__display');
  const display = document.createElement('div');
  const history = document.createElement('div');
  display.className = 'container__calculator__display__calculator';
  history.className = 'container__calculator__display__history';
  container.appendChild(display);
  container.appendChild(history);
}
function cCalculatorDisplay() {
  const display = document.querySelector(
    '.container__calculator__display__calculator'
  );
  const screen = document.createElement('div');
  const keypad = document.createElement('div');
  screen.className = 'container__calculator__display__calculator__screen';
  keypad.className = 'container__calculator__display__calculator__keypad';
  display.appendChild(screen);
  display.appendChild(keypad);
}

function cScreen() {
  const screen = document.querySelector(
    '.container__calculator__display__calculator__screen'
  );
  const operation = document.createElement('p');
  const result = document.createElement('h1');
  operation.className =
    'container__calculator__display__calculator__screen__operation';
  result.className =
    'container__calculator__display__calculator__screen__result';
  operation.textContent = '0123456789 * 0123456789';
  result.textContent = '0123456789';
  screen.appendChild(operation);
  screen.appendChild(result);
}

function ckeypad() {
  const keypad = document.querySelector(
    '.container__calculator__display__calculator__keypad'
  );
  for (let i = 0; i < 24; i++) {
    const button = document.createElement('button');
    button.className =
      'container__calculator__display__calculator__keypad__button';
    keypad.appendChild(button);
  }
}

function cProductInformation() {
  const information = document.querySelector('.container__information');
  const title = document.createElement('h1');
  const description = document.createElement('p');
  const button = document.createElement('button');
  const tags = document.createElement('a');
  title.className = 'container__information__title';
  title.textContent = 'Project C';
  description.className = 'container__information__description';
  description.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ipsam aperiam temporibus reiciendis. Nihil dolorum natus, velit ducimus fuga quibusdam eum explicabo inventore aut, veritatis quam, illum atque maiores? Repellat!';
  button.className = 'container__information__button';
  button.textContent = 'Download for Windows';
  tags.className = 'container__information__tags';
  information.appendChild(title);
  information.appendChild(description);
  information.appendChild(button);
  information.appendChild(tags);
}

window.onload = function () {
  cContainer();
  cCalculator();
  cProductInformation();
  cCalculatorTopBar();
  cCalculatorContainer();
  cCalculatorDisplay();
  cScreen();
  ckeypad();
};

//
