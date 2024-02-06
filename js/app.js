const scoreEl = document.querySelector('.score');
const timerEl = document.querySelector('.timer-display');
const timerMin = 5;
let time = timerMin * 60;
const restartBtnEl = document.querySelector('.restart-button');
const startBtnEl = document.querySelector('.start-button')
let boardEl = document.querySelector('.board') //parent
const children = boardEl.children;
const pickedCardsClass = document.getElementsByClassName('cardFront')

let firstPickedCard;
let secondPickedCard;


//create an array of cards
const cards = ['🥰','🥰', '🧚‍♀️', '🧚‍♀️', '🤩', '🤩', '👩🏼‍💻', '👩🏼‍💻', '🤍', '🤍', '👾', '👾'];
let shuffleCards = cards.sort(() => (Math.random() > .5) ? 2 : -1);

// start the game

startBtnEl.addEventListener('click', startTheGame)
let cardEl;
function startTheGame() {
  
  boardEl.innerText = '';
  boardEl.classList.remove('background')
  //start the timer
  setInterval(updateTimer, 1000)
  // create a variable for each card
  cards.forEach(function(card) {
    cardEl = document.createElement('div');
    cardEl.className = 'card-block';
    cardEl.innerHTML = card;
    boardEl.appendChild(cardEl)
    if (pickedCardsClass.length < 2) {
      cardEl.addEventListener('click', function() {
        this.classList.add('cardFront')
        if (pickedCardsClass.length === 2) {
          console.log('2 picked');
          disable()
        }
      }) 
    }
  })
}


 function disable() {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.add('disabled')
    }
 }
 

function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timerEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}