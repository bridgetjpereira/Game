# Game

Creating a game using JavaScript, HTML and CSS.

Opted for simple matching game, that I can build on and develop further.

Concept: Two linked webpages.

Webpage 1 shows image of the doorway to a haunted stately home. Click on the letterbox to enter the game. (Ideally, the sound effect of a creaking old door should be initialised when you click to enter!)

Webpage 2 shows a portrait gallery inside the stately home. Portraits of family are set in frames and hidden behind black squares. Click on the squares inside the frames to reveal (flip) the portraits. Score points for matching the most portraits in the quickest amount of time, with the least number of clicks.

Aim of game: is to matched all of the portraits in under 2 mins to uncover the stolen potrait.

Css: Create grid of 13 squares. Background image of inside stately home- suit of armour, chandelier etc.
-Create container grid
-Nested x13 divs squares.

HTML: Title- Family Portrait Game

    <p> Rules of game. Blah blah blah....Sir Somebody<p>

    Buttons:
    -Letterbox 'Come inside!'

    Play again <body>

                  <input type = "button"  value= "Play"  onclick="startGame()";/>

    Return to landing page.

JavaScript:

Alerts:

If successful: Alert 'Well done! You have won!'

If unsuccessful: Alert 'Better luck next time!'

Click events:

-When click on any card, flips over to reveal portrait underneath.
-If cards match (= = =), then leave exposed
-If cards don't match (! = =), then cover up again with card.

Timer

Set for 2 mins?

setTimeout (gameTimer, 1000 x 120?)
Score

Score = Win or lose

Click counter

counts clicks

Function- startGame

-function startGame() {
}

function updateCount (){
count = count +1;
document.getElementById("number").innerHTML = count;

}
