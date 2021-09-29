let score = 0;
let moves = 0;
let scoreboard = document.getElementById("score");
let movesBoard = document.getElementById("moves");

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

    //Stop timer if 0 seconds on the clock.
    if (--timer < 0) {
      clearInterval(intervalID);
    }
  }, 1000);
}

//Start 2 min timer on page load
window.onload = function () {
  var twoMinutes = 60 * 2,
    display = document.querySelector("#time");
  startTimer(twoMinutes, display);
};

//Start game

//Flip card function
const cards = document.querySelectorAll(".flip-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  //Avoid clicking the same card

  if (this === firstCard) return;
  this.classList.toggle("flip");
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;

  //Match card function

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    score = score + 1;
    //Update content of p element you created
    scoreboard.innerHTML = +score;
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    lockBoard = false;
    resetBoard();
  }, 1500);
}

//Create a score
/*
document.getElementById("scoreboard").onclick = function () {
  var score = parseInt(document.getElementById("score").innerHTML);
  score++;
  document.getElementById("score").innerHTML = score;

  var p = document.createElement('p')

var counter=0;
var q1=prompt("what's your name?");

if (q1==='akash'){
  counter=counter+1;
  //Update content of p element you created
  p.innerHTML = 'yay right: ' + counter + '/ 5'
}
*/
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//Shuffle Cards

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

//Moves

cards.forEach((card) => card.addEventListener("click", flipCard));
