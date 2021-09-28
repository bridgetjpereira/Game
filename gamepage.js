// Create 2 minute count down timer

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  intervalID = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalID);
    }
  }, 1000);
}

window.onload = function () {
  var twoMinutes = 60 * 2,
    display = document.querySelector("#time");
  startTimer(twoMinutes, display);
};

const cards = document.querySelectorAll(".flip-card");
console.log(cards[0]);

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

/*
//Declaring variables

let score = 0;
let moves = 0;
let scoreTracker = document.getElementById("score");
let movesTracker = document.getElementById("moves");
let cardsGrid = document.getElementById("cards");
let openCard;
let openCardChild;
let firstCard;
let twoCards = [];
let intervalID;

const deckCards = [
  "pug",
  "pug",
  "alsatian",
  "alsatian",
  "gingerdog",
  "gingerdog",
  "spaniel",
  "spaniel",
  "dogportrait",
  "dogportrait",
  "whitedog",
  "whitedog",
  "hairydog",
  "hairydog",
  "armydog",
  "armydog",
];
*/
