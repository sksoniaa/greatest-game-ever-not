const scoreEl = document.querySelector(".score");
let score = 0;
let tries = 0;
const timerEl = document.querySelector(".timer-display");
const timerMin = 5;
let time = timerMin * 60;
const restartBtnEl = document.querySelector(".restart-button");
const startBtnEl = document.querySelector(".start-button");
let boardEl = document.querySelector(".board"); //parent
const children = boardEl.children;
const pickedCardsClass = document.getElementsByClassName("cardFront");
let pickedArr = [];
let text;
let firstPickedCard;
let secondPickedCard;

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

// start the game

startBtnEl.addEventListener("click", startTheGame);
let cardEl;
function startTheGame() {
  boardEl.innerText = "";
  boardEl.classList.remove("background");
  //start the timer
  setInterval(updateTimer, 1000);
  // create a variable for each card
  cards.forEach(function (card) {
    cardEl = document.createElement("div");
    cardEl.className = "card-block";
    cardEl.innerHTML = card;
    boardEl.appendChild(cardEl);
    play();
  });
}
function play() {
  cardEl.addEventListener("click", function () {
    tries++;
    console.log(tries);
    pickedArr.push(this.textContent);

    this.classList.add("cardFront");

    if (pickedCardsClass.length >= 2 && pickedCardsClass.length % 2 === 0) {
      disable();
      checkForMatch();
      makeAble();
    }
  });
  if (score === 6) {
    victory();
  } else if ((timerEl.innerHTML = "0:00")) {
    fail();
  }
}

function disable() {
  for (let i = 0; i < children.length; i++) {
    children[i].classList.add("disabled");
  }
}

function makeAble() {
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("disabled");
  }
}

function checkForMatch() {
  firstPickedCard = pickedArr[pickedArr.length - 2];
  secondPickedCard = pickedArr[pickedArr.length - 1];
  console.log(firstPickedCard);
  console.log(secondPickedCard);
  if (firstPickedCard === secondPickedCard) {
    score++;
    console.log(`score is ${score}`);
  } else {
    console.log(score + " you didn't guess");
  }
  scoreEl.innerHTML = `Score: ${score}`;
}

function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}

function victory() {}

function fail() {}
