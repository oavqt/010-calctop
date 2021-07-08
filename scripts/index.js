// calc

// create content interface

function createCont() {
  const container = document.querySelector('.container');
  const calculator = document.createElement('div');
  const information = document.createElement('div');
  calculator.className = 'container__calculator';
  information.className = 'container__information';
  container.appendChild(calculator);
  container.appendChild(information);
}

function createCalc() {
  const calculator = document.querySelector('.container__calculator');
  const bar = document.createElement('div');
  const container = document.createElement('div');
  bar.className = 'container__calculator__bar';
  container.className = 'container__calculator__container';
  calculator.appendChild(bar);
  calculator.appendChild(container);
}

function createCalcBar() {
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

function createCalcCont() {
  const container = document.querySelector('.container__calculator__container');
  const display = document.createElement('div');
  const history = document.createElement('div');
  display.className = 'container__calculator__container__display';
  history.className = 'container__calculator__container__history';
  container.appendChild(display);
  container.appendChild(history);
}
function createCalcDisp() {
  const display = document.querySelector(
    '.container__calculator__container__display'
  );
  const screen = document.createElement('div');
  const keypad = document.createElement('div');
  screen.className = 'container__calculator__container__display__screen';
  keypad.className = 'container__calculator__container__display__keypad';
  display.appendChild(screen);
  display.appendChild(keypad);
}

function createInfo() {
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
  createCont();
  createCalc();
  createInfo();
  createCalcBar();
  createCalcCont();
  createCalcDisp();
};

//
