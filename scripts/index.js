//calc

window.onload = function () {
  content();
  calculator();
  description();
  calcContent();
};

//create content interface

function content() {
  const content = document.querySelector('.container');
  const calculator = document.createElement('div');
  const description = document.createElement('div');
  calculator.className = 'container__calculator';
  description.className = 'container__description';
  content.appendChild(calculator);
  content.appendChild(description);
}

function calculator() {
  const calculator = document.querySelector('.container__calculator');
  const bar = document.createElement('div');
  const content = document.createElement('div');
  bar.className = 'container__calculator__bar';
  content.className = 'container__calculator__content';
  calculator.appendChild(bar);
  calculator.appendChild(content);
}

function description() {
  const description = document.querySelector('.container__description');
  const title = document.createElement('h1');
  const information = document.createElement('p');
  const button = document.createElement('button');
  const tags = document.createElement('a');
  title.className = 'container__description__title';
  title.textContent = 'Project C';
  information.className = 'container__description__information';
  information.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ipsam aperiam temporibus reiciendis. Nihil dolorum natus, velit ducimus fuga quibusdam eum explicabo inventore aut, veritatis quam, illum atque maiores? Repellat!';
  button.className = 'container__description__button';
  button.textContent = 'Download for Windows'
  tags.className = 'container__description__tags';
  description.appendChild(title);
  description.appendChild(information);
  description.appendChild(button);
  description.appendChild(tags);
}

function calcContent() {
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

  const content = document.querySelector('.container__calculator__content');
  const display = document.createElement('div');
  const history = document.createElement('div');
  display.className = 'container__calculator__content__display';
  history.classList = 'container__calculator__content__history';
  content.appendChild(display);
  content.appendChild(history);
}

//
