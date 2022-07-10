let score = 0;
let moves = 0;
let scoreboard = document.getElementById("score");
let movesboard = document.getElementById("moves");
let portraitGrid = document.getElementById("cards");

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

    function gameOver() {
      if (score > 7) {
        win();
      } else if (score <= 7 && timer <= 0) {
        lose();
      }
    }
    gameOver();

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
/*layoutGame();*/
//Flip card function
const cards = document.querySelectorAll(".flip-card");

let hasFlippedCard = false; //going to assume card not flipped
let lockBoard = false; //assume board is not locked
let firstCard, secondCard; //create a first and second card

function flipCard() {
  if (lockBoard) return; //if lockboard is true - return i.e. exit
  //Avoid clicking the same card
  updateMoves();
  //this refers to card that has been clicked on
  if (this === firstCard) return; //if card clicked on is first card which we've already clicked, do nothing
  //if we get here, means a new card has been clicked on
  this.classList.add("flip");

  //we see if card has been flipped beforehand
  // if it hasn't go here
  if (!hasFlippedCard) {
    hasFlippedCard = true; //tell the computer we have flipped a card

    firstCard = this; //set the card we have flipped to be the first card

    return; //exit
  }

  secondCard = this; //if we get to here, second card is the one we have clicked
  hasFlippedCard = false; //reset hasFlippedCard for next sequence

  //Match card function

  checkForMatch();
}

function updateMoves() {
  moves = moves + 1;
  movesboard.innerHTML = moves;
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    score = score + 1;
    scoreboard.innerHTML = score;
    return;
  }

  //if cards don't match, flip them back over!
  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard); //calls function flip card and leaves both cards face up and not clickable
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

function win() {
  document.getElementById("overlay-win").style.display = "block";
}

function lose() {
  document.getElementById("overlay-lose").style.display = "block";
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
//listening for a click on each card in cards array and if clicked calls the flipCard function.
