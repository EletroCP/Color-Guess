const rndNumber = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
};

const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
const ball3 = document.getElementById('ball3');
const ball4 = document.getElementById('ball4');
const ball5 = document.getElementById('ball5');
const ball6 = document.getElementById('ball6');

const balls = [ball1, ball2, ball3, ball4, ball5, ball6];

const colorElements = () => {
  balls.forEach((element) => {
    const color = element;
    color.style.backgroundColor = `rgb(
    ${rndNumber(0, 255)}, ${rndNumber(0, 255)}, ${rndNumber(0, 255)})`;
  });
};

const colorRight = () => {
  const pickACollor = rndNumber(1, 6);
  const color = balls[pickACollor].style.backgroundColor;
  console.log(color);
  document.querySelector('#rgb-color').innerHTML = color;
  const oldWinner = document.querySelector('.win');
  if (oldWinner) oldWinner.classList.remove('win');
  balls[pickACollor].classList.add('win');
};

function colorOnLoad() {
  colorElements();
  colorRight();

  const rightAnswer = document.querySelector('#answer');
  rightAnswer.innerHTML = 'Escolha uma cor';
}

function resposta({ target }) {
  const pontos = document.getElementById('score');
  if (target.classList.length === 2) {
    document.getElementById('answer').innerHTML = 'Acertou!';
    const scoreUp = parseInt(pontos.innerText, 10) + 3;
    pontos.innerText = scoreUp;
    colorOnLoad();
  } else {
    document.getElementById('answer').innerHTML = 'Errou! Tente novamente!';
    pontos.innerText = 0;
  }
}

balls.forEach((element) => {
  element.addEventListener('click', resposta);
});

window.onload = colorOnLoad;
