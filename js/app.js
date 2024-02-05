const scoreEl = document.querySelector('.score');
const timerEl = document.querySelector('.timer-display');
const startBtnEl = document.querySelector('.start-button');

const cards = ['🥰','🥰', '🧚‍♀️', '🧚‍♀️', '🤩', '🤩', '👩🏼‍💻', '👩🏼‍💻', '🤍', '🤍', '👾', '👾'];

let shuffleCards = cards.sort(() => (Math.random() > .5) ? 2 : -1);
cards.forEach(function(card) {
  let cardEl = document.createElement('div');
  cardEl.className = 'card-block';
  cardEl.innerHTML = card;
  document.querySelector('.board').appendChild(cardEl)
})

const hasFlippedCards = false;
let firstPickedCard;
let secondPickedCard;


// const timerMin = 5;
// let time = timerMin * 60;


//setInterval(updateTimer, 1000)

// function updateTimer() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   timerEl.innerHTML = `${minutes}:${seconds}`;
//   time--;
// }