// calc

// create content interface

function cContainer() {
  const container = document.querySelector('.container');
  const main = document.createElement('div');
  const secondary = document.createElement('div');
  main.className = 'container__main';
  secondary.className = 'container__secondary';
  container.appendChild(main);
  container.appendChild(secondary);
}

function cContainerMain() {
  const main = document.querySelector('.container__main');
  const calculator = document.createElement('div');
  const information = document.createElement('div');
  calculator.className = 'container__main__calculator';
  information.className = 'container__main__information';
  main.appendChild(calculator);
  main.appendChild(information);
}

function cCalculator() {
  const calculator = document.querySelector('.container__main__calculator');
  const bar = document.createElement('div');
  const container = document.createElement('div');
  bar.className = 'container__main__calculator__bar';
  container.className = 'container__main__calculator__display';
  calculator.appendChild(bar);
  calculator.appendChild(container);
}

function cCalculatorTopBar() {
  const bar = document.querySelector('.container__main__calculator__bar');
  const title = document.createElement('h1');
  title.className = 'container__main__calculator__bar__title';
  title.textContent = 'Calculator';
  bar.appendChild(title);
  for (let i = 0; i < 3; i++) {
    const button = document.createElement('button');
    button.className = 'container__main__calculator__bar__button';
    bar.appendChild(button);
  }
}

function cMaxMinClose() {
  const bar = document.querySelector('.container__main__calculator__bar');
  let buttons = bar.children;
  buttons[1].classList.add('container__main__calculator__bar__button__min');
  buttons[2].classList.add('container__main__calculator__bar__button__max');
  buttons[3].classList.add('container__main__calculator__bar__button__close');
}

function cCalculatorContainer() {
  const container = document.querySelector(
    '.container__main__calculator__display'
  );
  const display = document.createElement('div');
  const chalkboard = document.createElement('div');
  display.className = 'container__main__calculator__display__calculator';
  chalkboard.className = 'container__main__calculator__display__chalkboard';
  container.appendChild(display);
  container.appendChild(chalkboard);
}

function cCalculatorDisplay() {
  const display = document.querySelector(
    '.container__main__calculator__display__calculator'
  );
  const screen = document.createElement('div');
  const keypad = document.createElement('div');
  screen.className = 'container__main__calculator__display__calculator__screen';
  keypad.className = 'container__main__calculator__display__calculator__keypad';
  display.appendChild(screen);
  display.appendChild(keypad);
}

function cScreen() {
  const screen = document.querySelector(
    '.container__main__calculator__display__calculator__screen'
  );
  const secondaryScreen = document.createElement('p');
  const mainScreen = document.createElement('h1');
  secondaryScreen.className =
    'container__main__calculator__display__calculator__screen__secondary';
  mainScreen.className =
    'container__main__calculator__display__calculator__screen__main';
  mainScreen.textContent = '0';
  screen.appendChild(secondaryScreen);
  screen.appendChild(mainScreen);
}

function cKeypad() {
  const keypad = document.querySelector(
    '.container__main__calculator__display__calculator__keypad'
  );
  for (let i = 0; i < 24; i++) {
    const button = document.createElement('button');
    button.className =
      'container__main__calculator__display__calculator__keypad__button';
    keypad.appendChild(button);
  }
}

function cKeys() {
  const keypad = document.querySelector(
    '.container__main__calculator__display__calculator__keypad'
  );
  let buttons = keypad.children;
  buttons[0].classList.add(
    'container__main__calculator__display__calculator__keypad__percentage'
  );
  buttons[0].setAttribute('data-key', '%');
  buttons[0].textContent = '%';
  buttons[0].value = 'percentage';
  buttons[1].classList.add(
    'container__main__calculator__display__calculator__keypad__ce'
  );
  buttons[1].setAttribute('data-key', 'Delete');
  buttons[1].textContent = 'ce';
  buttons[2].classList.add(
    'container__main__calculator__display__calculator__keypad__c'
  );
  buttons[2].setAttribute('data-key', 'Escape');
  buttons[2].textContent = 'c';
  buttons[3].classList.add(
    'container__main__calculator__display__calculator__keypad__backspace'
  );
  buttons[3].setAttribute('data-key', 'Backspace');
  buttons[3].textContent = '⤺';
  buttons[4].classList.add(
    'container__main__calculator__display__calculator__keypad__x_operator'
  );
  buttons[4].setAttribute('data-key', 'r');
  buttons[4].textContent = '¹ / x';
  buttons[4].value = 'fraction';
  buttons[5].classList.add(
    'container__main__calculator__display__calculator__keypad__x_operator'
  );
  buttons[5].setAttribute('data-key', '@');
  buttons[5].textContent = 'x ²';
  buttons[5].value = 'square';
  buttons[6].classList.add(
    'container__main__calculator__display__calculator__keypad__x_operator'
  );
  buttons[6].setAttribute('data-key', 'q');
  buttons[6].textContent = '² √ x';
  buttons[6].value = 'root';
  buttons[7].classList.add(
    'container__main__calculator__display__calculator__keypad__operator'
  );
  buttons[7].setAttribute('data-key', '/');
  buttons[7].textContent = '÷';
  buttons[7].value = 'divide';
  buttons[8].classList.add(
    'container__main__calculator__display__calculator__keypad__operand'
  );
  buttons[8].setAttribute('data-key', '7');
  buttons[8].textContent = '7';
  buttons[9].classList.add(
    'container__main__calculator__display__calculator__keypad__operand'
  );
  buttons[9].setAttribute('data-key', '8');
  buttons[9].textContent = '8';
  buttons[10].classList.add(
    'container__main__calculator__display__calculator__keypad__operand'
  );
  buttons[10].setAttribute('data-key', '9');
  buttons[10].textContent = '9';
  buttons[11].classList.add(
    'container__main__calculator__display__calculator__keypad__operator'
  );
  buttons[11].setAttribute('data-key', '*');
  buttons[11].textContent = '×';
  buttons[11].value = 'multiply';
  buttons[12].classList.add(
    'container__main__calculator__display__calculator__keypad__operand'
  );
  buttons[12].setAttribute('data-key', '4');
  buttons[12].textContent = '4';
  buttons[13].classList.add(
    'container__main__calculator__display__calculator__keypad__operand'
  );
  buttons[13].setAttribute('data-key', '5');
  buttons[13].textContent = '5';
  buttons[14].classList.add(
    'container__main__calculator__display__calculator__keypad__operand'
  );
  buttons[14].setAttribute('data-key', '6');
  buttons[14].textContent = '6';
  buttons[15].classList.add(
    'container__main__calculator__display__calculator__keypad__operator'
  );
  buttons[15].setAttribute('data-key', '-');
  buttons[15].textContent = '−';
  buttons[15].value = 'subtract';
  buttons[16].classList.add(
    'container__main__calculator__display__calculator__keypad__operand'
  );
  buttons[16].setAttribute('data-key', '1');
  buttons[16].textContent = '1';
  buttons[17].classList.add(
    'container__main__calculator__display__calculator__keypad__operand'
  );
  buttons[17].setAttribute('data-key', '2');
  buttons[17].textContent = '2';
  buttons[18].classList.add(
    'container__main__calculator__display__calculator__keypad__operand'
  );
  buttons[18].setAttribute('data-key', '3');
  buttons[18].textContent = '3';
  buttons[19].classList.add(
    'container__main__calculator__display__calculator__keypad__operator'
  );
  buttons[19].setAttribute('data-key', '+');
  buttons[19].textContent = '+';
  buttons[19].value = 'add';
  buttons[20].classList.add(
    'container__main__calculator__display__calculator__keypad__negate'
  );
  buttons[20].setAttribute('data-key', 'F9');
  buttons[20].textContent = '⁺ / -';
  buttons[21].classList.add(
    'container__main__calculator__display__calculator__keypad__operand'
  );
  buttons[21].setAttribute('data-key', '0');
  buttons[21].textContent = '0';
  buttons[22].classList.add(
    'container__main__calculator__display__calculator__keypad__decimal'
  );
  buttons[22].setAttribute('data-key', '.');
  buttons[22].textContent = '.';
  buttons[23].classList.add(
    'container__main__calculator__display__calculator__keypad__equal'
  );
  buttons[23].setAttribute('data-key', 'Enter');
  buttons[23].textContent = '=';
}

function cChalkboard() {
  const chalkboard = document.querySelector(
    '.container__main__calculator__display__chalkboard'
  );
  const header = document.createElement('div');
  const canvas = document.createElement('div');
  const footer = document.createElement('div');
  header.className = 'container__main__calculator__display__chalkboard__title';
  canvas.className = 'container__main__calculator__display__chalkboard__canvas';
  footer.className = 'container__main__calculator__display__chalkboard__footer';
  chalkboard.appendChild(header);
  chalkboard.appendChild(canvas);
  chalkboard.appendChild(footer);
}

function cCanvas() {
  const canvas = document.querySelector(
    '.container__main__calculator__display__chalkboard__canvas'
  );
  const context = document.createElement('canvas');
  context.className =
    'container__main__calculator__display__chalkboard__canvas__context';
  canvas.appendChild(context);
}

function cChalkboardHeader() {
  const title = document.querySelector(
    '.container__main__calculator__display__chalkboard__title'
  );
  const expand = document.createElement('button');
  const name = document.createElement('h1');
  expand.className =
    'container__main__calculator__display__chalkboard__title__expand';
  name.className =
    'container__main__calculator__display__chalkboard__title__name';
  name.textContent = 'Chalkboard';
  title.appendChild(expand);
  title.appendChild(name);
}

function cChalkboardFooter() {
  const footer = document.querySelector(
    '.container__main__calculator__display__chalkboard__footer'
  );
  const eraser = document.createElement('button');
  const clear = document.createElement('button');
  eraser.classList =
    'container__main__calculator__display__chalkboard__footer__eraser';
  clear.className =
    'container__main__calculator__display__chalkboard__footer__clear';
  eraser.textContent = 'Eraser';
  clear.textContent = 'Clear';
  footer.appendChild(eraser);
  footer.appendChild(clear);
}

function cProductInformation() {
  const information = document.querySelector('.container__main__information');
  const title = document.createElement('h1');
  const description = document.createElement('p');
  const tags = document.createElement('a');
  title.className = 'container__main__information__title';
  title.textContent = 'Project C';
  description.className = 'container__main__information__description';
  description.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ipsam aperiam temporibus reiciendis. Nihil dolorum natus, velit ducimus fuga quibusdam eum explicabo inventore aut, veritatis quam, illum atque maiores? Repellat!';
  tags.className = 'container__main__information__tags';
  information.appendChild(title);
  information.appendChild(description);
  information.appendChild(tags);
}

function cTags() {
  const tags = document.querySelector('.container__main__information__tags');
  const github = document.createElement('img');
  const gitlogo = document.createElement('img');
  tags.href = 'https://github.com/oavqt';
  tags.target = '_blank';
  github.src = 'images/github.png';
  gitlogo.src = 'images/gitlogo.png';
  github.className = 'container__main__information__tags__github';
  gitlogo.className = 'container__main__information__tags__gitlogo';
  tags.appendChild(github);
  tags.appendChild(gitlogo);
  tags.insertAdjacentHTML('beforeend', 'Oav');
}

function cContainerSecond() {
  const secondary = document.querySelector('.container__secondary');
  const button = document.createElement('button');
  button.className = 'container__secondary__button';
  button.textContent = 'Download for Windows';
  secondary.appendChild(button);
}

cContainer();
cContainerMain();
cCalculator();
cCalculatorTopBar();
cMaxMinClose();
cCalculatorContainer();
cCalculatorDisplay();
cScreen();
cKeypad();
cKeys();
cChalkboard();
cChalkboardHeader();
cChalkboardFooter();
cCanvas();
cProductInformation();
cTags();
cContainerSecond();

//
