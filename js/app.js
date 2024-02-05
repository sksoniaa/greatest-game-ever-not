const scoreEl = document.querySelector('.score');
const timerEl = document.querySelector('.timer-display');
const restartBtnEl = document.querySelector('.restart-button');
const startBtnEl = document.querySelector('.start-button')
let boardEl = document.querySelector('.board')

const hasFlippedCards = false;
let firstPickedCard;
let secondPickedCard;

const cards = ['🥰','🥰', '🧚‍♀️', '🧚‍♀️', '🤩', '🤩', '👩🏼‍💻', '👩🏼‍💻', '🤍', '🤍', '👾', '👾'];
let shuffleCards = cards.sort(() => (Math.random() > .5) ? 2 : -1);



function startTheGame() {
  boardEl.innerText = '';
  boardEl.classList.remove('background')
  cards.forEach(function(card) {
    let cardEl = document.createElement('div');
    cardEl.className = 'card-block';
    cardEl.innerHTML = card;
    cardEl.addEventListener('click', function() {
      this.classList.add('cardFront')
      console.log(this)
    })
    boardEl.appendChild(cardEl)
  })
}

 startBtnEl.addEventListener('click', startTheGame)

// function startTheGame() {
//   boardEl.forEach(function(card) {
//     cardEl.addEventListener('click', function() {
//     this.classList.add('cardFront')
//     console.log('started');
//   })
//   })
  
// }




















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