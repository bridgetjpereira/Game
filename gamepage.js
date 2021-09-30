let score = 0;
let moves = 0;
let scoreboard = document.getElementById("score");
let movesboard = document.getElementById("moves");
let portraitGrid = document.getElementById("cards");

/*
const cardDeck = [
  { name: "pug", img: "pug elizabethan-svg.svg" },
  { name: "pug", img: "pug elizabethan-svg.svg" },
  { name: "alsatian-ruff", img: "Emptyframe-svg.svg" },
  { name: "alsatian-ruff", img: "alsatian-ruff-svg.svg" },
  { name: "ginger-dog", img: "gingerdogfinalsvg.svg" },
  { name: "ginger-dog", img: "gingerdogfinalsvg.svg" },
  { name: "spaniel", img: "Spaniel oil painting-svg.svg" },
  { name: "spaniel", img: "Spaniel oil painting-svg.svg" },
  { name: "dog", img: "DOGPORTRAIT.svg" },
  { name: "dog", img: "DOGPORTRAIT.svg" },
  { name: "whitedog", img: "finalwhitedogsvg.svg" },
  { name: "whitedog", img: "finalwhitedogsvg.svg" },
  { name: "hairydog", img: "Hairy dog man-svg.svg" },
  { name: "hairydog", img: "Hairy dog man-svg.svg" },
  { name: "coronel", img: "Cl dog-svg.svg" },
  { name: "coronel", img: "Cl dog-svg.svg" },
];

/*
// Create 2 minute count down timer
const createGame = () => {
  shuffleArray(cardDeck);
};
*/

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
  if (this === firstCard) return; //if card clicked on is first card, return
  this.classList.add("flip");

  if (!hasFlippedCard) {
    //if we haven't flipped a card yet
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

function win() {
  document.getElementById("overlay-win").style.display = "block";
}

function lose() {
  document.getElementById("overlay-lose").style.display = "block";
}
/*
const showLoseMsg = () => {
  document.getElementById("message-lose").classList.remove("hidden");
  document.getElementById("message-lose").classList.add("visible");
};

const showCongratulations_msg = () => {
  document.getElementById("congratulations_msg").classList.remove("hidden");
  document.getElementById("congratulations_msg").classList.add("visible");
};

const hideLoseMsg = () => {
  document.getElementById("message-lose").classList.add("hidden");
  document.getElementById("message-lose").classList.remove("visible");
};

const hideCongratulations_msg = () => {
  document.getElementById("congratulations_msg").classList.add("hidden");
  document.getElementById("congratulations_msg").classList.remove("visible");
};

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

*/
//Shuffle Cards

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();
/*
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

//Lay out cards using shuffleArray

const layoutGame = () => {
  shuffleArray(cardDeck);




    cardDeck.forEach((card, index) =>{

    let div = document.createElement("div");
    div.setAttribute("portrait", card.name);
    div.className = "card-back-flip";
    div.innerHTML = `<img id= "${index}" src="${card.img}" alt="${card.name}" class="hidden"></img>`;
    portraitGrid.appendChild(div);
    });

};
*/
cards.forEach((card) => card.addEventListener("click", flipCard));
