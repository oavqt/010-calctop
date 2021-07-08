//calc

window.onload = function () {
  content();
  calculator();
  description();
};

//create content interface

function content() {
  const content = document.querySelector('.content');
  const calculator = document.createElement('div');
  const description = document.createElement('div');
  calculator.className = 'content__calculator';
  description.className = 'content__description';
  content.appendChild(calculator);
  content.appendChild(description);
}

function calculator() {
  const calculator = document.querySelector('.content__calculator');
}

function description() {
  const description = document.querySelector('.content__description');
  const title = document.createElement('h1');
  title.className = 'content__description__title';
  const information = document.createElement('p');
  information.className = 'content__description__information';
  const button = document.createElement('button');
  button.className = 'content__description__button';
  const tags = document.createElement('a');
  tags.className = 'content__description__tags';
  description.appendChild(title);
  description.appendChild(information);
  description.appendChild(button);
  description.appendChild(tags);
}
