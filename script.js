let playesPoints = [];
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

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
  document.querySelector('#rgb-color').innerHTML = `Adivinhe esta cor: <br><br> ${color}`;
  const oldWinner = document.querySelector('.win');
  if (oldWinner) oldWinner.classList.remove('win');
  balls[pickACollor].classList.add('win');
};

const boardScreen = document.getElementById('scoreBoard');
const containerPointes = document.getElementById('players');

const addPlayer = (name, points, data) => {
  const div = document.createElement('div');
  div.classList.add('points');
  const p = document.createElement('p');
  const pData = document.createElement('p');

  p.innerText = `${name}:  ${points}`;
  pData.innerText = data;

  div.appendChild(p);
  div.appendChild(pData);
  containerPointes.appendChild(div);
};

const loadScore = () => {
  containerPointes.innerHTML = '';
  playesPoints.forEach(({ name, points, data }) => {
    addPlayer(name, points, data);
  });
};
//

function colorOnLoad() {
  if (localStorage.score) {
    playesPoints = JSON.parse(localStorage.score);
  } else { playesPoints = []; }
  loadScore();
  colorElements();
  colorRight();
}

const awnser = document.getElementById('answer');
const possGameScore = document.getElementById('possGame');

function resposta({ target }) {
  const pontos = document.getElementById('score');
  if (target.classList.length === 2) {
    awnser.innerHTML = 'Acertou!';
    const scoreUp = parseInt(pontos.innerText, 10) + 3;
    possGameScore.innerText = scoreUp;
    pontos.innerText = scoreUp;
    colorOnLoad();
  } else {
    awnser.innerHTML = 'Errou! Tente novamente!';
    pontos.innerText = 0;
    balls.forEach((element) => {
      element.removeEventListener('click', resposta);
    });
    boardScreen.style.display = 'flex';
  }
}

const addAwnser = () => {
  awnser.innerHTML = '';
  balls.forEach((element) => {
    element.addEventListener('click', resposta);
  });
  colorOnLoad();
};

const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', addAwnser);

balls.forEach((element) => {
  element.addEventListener('click', resposta);
});

const playerInput = document.getElementById('playerName');

const removeBoard = document.getElementById('removeBoard');

playerInput.addEventListener('keyup', ({ target }) => {
  if (target.value !== '') {
    removeBoard.removeAttribute('disabled', 'disabled');
    removeBoard.style.borderColor = 'whitesmoke';
  } else {
    removeBoard.style.borderColor = 'red';
    removeBoard.setAttribute('disabled', 'disabled');
  }
});

const saveBoard = () => {
  localStorage.score = JSON.stringify(playesPoints);
};

removeBoard.addEventListener('click', () => {
  const objectBoard = {
    name: playerInput.value,
    points: possGameScore.innerText,
    data: today.toLocaleDateString(),
  };
  playesPoints.push(objectBoard);
  playesPoints.sort((a, b) => {
    if (a.point < b.points) return 1;
    if (a.points > b.points) return -1;
    return 0;
  });
  boardScreen.style.display = 'none';
  possGameScore.innerText = 0;
  if (playesPoints.length >= 8) playesPoints.pop();
  saveBoard();
  addAwnser();
});

// max 7 in board

window.onload = colorOnLoad;
