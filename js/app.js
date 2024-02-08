const scoreEl = document.querySelector(".score");
const timerEl = document.querySelector(".timer-display");
const restartBtnEl = document.querySelector(".restart-button");
const startBtnEl = document.querySelector(".start-button");
const pickedCardsClass = document.getElementsByClassName("cardFront");
let boardEl = document.querySelector(".board"); //parent
let vPopupEl = document.querySelector('.v-popup')
let fPopupEl = document.querySelector('.f-popup')
let playAgainBtn = document.querySelector('.play-again-btn')
let tryAgainBtn = document.querySelector('.try-again-btn')
let containerEl = document.querySelector('.container')
let aEl = document.querySelector('a')
let aImgEl = document.querySelector('.a-img')
const children = boardEl.children;
let thisEl;
let score = 0;
let pickedArr = [];
let firstPickedCard;
let secondPickedCard;
let timerInterval;

//create an array of cards

const cards = [
  "🥰",
  "🥰",
  "🧚‍♀️",
  "🧚‍♀️",
  "🤩",
  "🤩",
  "👩🏼‍💻",
  "👩🏼‍💻",
  "🤍",
  "🤍",
  "👾",
  "👾",
];
let shuffleCards = cards.sort(() => (Math.random() > 0.5 ? 2 : -1));


// start the game when clicked on the btn Start
startBtnEl.addEventListener("click", startTheGame);
let cardEl;

// function that removes the initial div saying welcome...
function removeWelcomePage() {
  boardEl.innerText = "";
  boardEl.classList.remove("background");
}

// function to start the game
function startTheGame() {
  removeWelcomePage()
  //start the timer
  timerInterval = setInterval(updateTimer, 1000);
  // define a variable for each card
  cards.forEach(function (card) {
    cardEl = document.createElement("div");
    cardEl.className = "card-block";
    cardEl.innerHTML = card;
    boardEl.appendChild(cardEl);
    play()
  });
}
// flipping
let lastPicked = [];
function flipTheCardFront() {
  thisEl = this
  thisEl.classList.add("cardFront");
  
  pickedArr.push(thisEl);
  if (pickedArr.length % 2 !== 0) {
    play()
  }else if (pickedArr.length >= 2 && pickedArr.length % 2 === 0) {
    thisEl = this
    thisEl.classList.add('cardFront')
    firstPickedCard = pickedArr[pickedArr.length-2]
    secondPickedCard = pickedArr[pickedArr.length-1]
    lastPicked = [firstPickedCard, secondPickedCard]
    checkForMatch()
  }
}

function checkForMatch() {
  if (firstPickedCard.innerText !== secondPickedCard.innerText) {
    setTimeout(() => {
      firstPickedCard.classList.remove('cardFront');
      secondPickedCard.classList.remove('cardFront')
    }, 1000)
} else if (firstPickedCard.innerText === secondPickedCard.innerText) {
  firstPickedCard.classList.add('disabled')
  secondPickedCard.classList.add('disabled')
  score ++;
}
scoreEl.innerHTML = `Score: ${score}`;
 winOrLost()
}

function play() {
  cardEl.addEventListener('click', flipTheCardFront)
}  
  
// function checks if the user won or lost
function winOrLost() {
  if (score === 6) {
    victory();
  } else if (timerEl.innerHTML === "0:00") {
    fail();
  }
}
  
// the timer
let timerMin = 2.5;
let time = timerMin * 60;
function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerEl.innerHTML = `${minutes}:${seconds}`;
  // if the timer reaches 0 => the user lost
  if (time === 0) {
     fail()
  } else {
    time--;
  }
}
function victory() {
  containerEl.classList.add('blured-container')
  vPopupEl.classList.add('open-popup');
  clearInterval(timerInterval)
}
function fail() {
  containerEl.classList.add('blured-container')
  fPopupEl.classList.add('open-popup');
  clearInterval(timerInterval)
  
}
playAgainBtn.addEventListener('click', removeVPopup)
function removeVPopup() {
  vPopupEl.classList.remove('open-popup')
  window.location.reload()
}
tryAgainBtn.addEventListener('click', removeFPopup)
function removeFPopup() {
  fPopupEl.classList.remove('open-popup')
  window.location.reload()
}

function showInstagram() {
  aImgEl.classList.add('make-bigger')
}

aEl.addEventListener('mouseover', showInstagram)

aEl.addEventListener('mouseout', hideInstagram)

function hideInstagram() {
  setTimeout(() => {
    aImgEl.classList.remove('make-bigger')
  }, 1000)
}

aImgEl.addEventListener('click', function() {
  window.open("https://www.instagram.com/sksoniaa_/")
})