var whiteDeck = ["0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "2", "2", "2", "(2)", "(2)", "(2)"];
var yellowDeck = ["0", "0", "0", "0", "0", "0", "1", "1", "1", "2", "2", "2", "3", "3", "3", "(3)", "(3)", "(3)"];
var redDeck = ["0", "0", "0", "0", "0", "0", "2", "2", "2", "3", "3", "3", "3", "3", "3", "(4)", "(4)", "(4)"];
var blackDeck = ["0", "0", "0", "0", "0", "0", "3", "3", "3", "3", "3", "3", "4", "4", "4", "(5)", "(5)", "(5)"];
var currentWhite = [];
var currentYellow = [];
var currentRed = [];
var currentBlack = [];
var discardWhite = [];
var discardYellow = [];
var discardRed = [];
var discardBlack = [];


//On button click this function is activated
function draw (item, index){
  //This grabs the values out of HTML that the user inputs
  var w = document.getElementById("white").value;
  console.log(w)
  var y = document.getElementById("yellow").value;
  var r = document.getElementById("red").value;
  var b = document.getElementById("black").value;

  //Set's the value to 0 then for ever i < w(user input) it will pull a random card until the required user input is matched.
  for (i = 0; i < w; i++){
    currentWhite.push(whiteDeck.splice(Math.floor(Math.random()*whiteDeck.length), 1))
    //To prevent conflict with the above i=0 we name the below variable (w,y,r,b with e) 'we' or 'be' as example for white & black decks that would draw on a zero would auto reshuffe what is currently in the discard pile only.
    if (whiteDeck.length === 0) {
      for (we = 0; we < discardWhite.length; we++) {
        whiteDeck.push(discardWhite[we]);
        discardWhite.splice(we, 1);
        we--;
      }
    }
  }
  document.getElementById("draw-white").innerHTML = currentWhite;
  //Everytime draw is clicked the HTML field is set back to 0
  document.getElementById("white").value = 0;
  //Updates the current number of cards <p> field in the HTML document.
  document.getElementById("white-deck").innerHTML = "There are currently " + whiteDeck.length + " cards in this deck.";


  //Yellow decks random draw and populating new current array.
  for (i = 0; i < y; i++){
    currentYellow.push(yellowDeck.splice(Math.floor(Math.random()*yellowDeck.length), 1))
    //To prevent conflict with the above i=0 we name the below variable (w,y,r,b with e) 'we' or 'be' as example for white & black decks that would draw on a zero would auto reshuffe what is currently in the discard pile only.
    if (yellowDeck.length === 0) {
      for (ye = 0; ye < discardYellow.length; ye++) {
        yellowDeck.push(discardYellow[ye]);
        discardYellow.splice(ye, 1);
        ye--;
      }
    }
  }
  document.getElementById("draw-yellow").innerHTML = currentYellow;
  document.getElementById("yellow").value = 0;
  document.getElementById("yellow-deck").innerHTML = "There are currently " + yellowDeck.length + " cards in this deck.";

  //Red decks random draw and populating new current array.
  for (i = 0; i < r; i++){
    currentRed.push(redDeck.splice(Math.floor(Math.random()*redDeck.length), 1))
    //To prevent conflict with the above i=0 we name the below variable (w,y,r,b with e) 'we' or 'be' as example for white & black decks that would draw on a zero would auto reshuffe what is currently in the discard pile only.
    if (redDeck.length === 0) {
      for (re = 0; re < discardRed.length; re++) {
        redDeck.push(discardRed[re]);
        discardRed.splice(re, 1);
        re--;
      }
    }
  }
  document.getElementById("draw-red").innerHTML = currentRed;
  document.getElementById("red").value = 0;
  document.getElementById("red-deck").innerHTML = "There are currently " + redDeck.length + " cards in this deck.";

  //Black decks random draw and populating new current array.
  for (i = 0; i < b; i++){
    currentBlack.push(blackDeck.splice(Math.floor(Math.random()*blackDeck.length), 1))
    if (blackDeck.length === 0) {
      for (be = 0; be < discardBlack.length; be++) {
        blackDeck.push(discardBlack[be]);
        discardBlack.splice(be, 1);
        be--;
      }
    }
  }
  document.getElementById("draw-black").innerHTML = currentBlack;
  document.getElementById("black").value = 0;
  document.getElementById("black-deck").innerHTML = "There are currently " + blackDeck.length + " cards in this deck.";
}

//Clears the <p> tags from the HTML does nothing with the data.
function discard(){
  for (i = 0; i < currentWhite.length; i++) {
    discardWhite.push(currentWhite[i]);
    currentWhite.splice(i, 1);
    i--;
  }
  document.getElementById("draw-white").innerHTML = "";

  for (i = 0; i < currentYellow.length; i++) {
    discardYellow.push(currentYellow[i]);
    currentYellow.splice(i, 1);
    i--;
  }
  document.getElementById("draw-yellow").innerHTML = "";

  for (i = 0; i < currentRed.length; i++) {
    discardRed.push(currentRed[i]);
    currentRed.splice(i, 1);
    i--;
  }
  document.getElementById("draw-red").innerHTML = "";

  for (i = 0; i < currentBlack.length; i++) {
    discardBlack.push(currentBlack[i]);
    currentBlack.splice(i, 1);
    i--;
  }
  document.getElementById("draw-black").innerHTML = "";
}

function reset(){
  console.log("Reset Activated")
  for (i = 0; i < discardWhite.length; i++) {
    whiteDeck.push(discardWhite[i]);
    discardWhite.splice(i, 1);
    i--;
  }
  document.getElementById("white-deck").innerHTML = "There are currently " + whiteDeck.length + " cards in this deck.";

  for (i = 0; i < discardYellow.length; i++) {
    yellowDeck.push(discardYellow[i]);
    discardYellow.splice(i, 1);
    i--;
  }
  document.getElementById("yellow-deck").innerHTML = "There are currently " + yellowDeck.length + " cards in this deck.";

  for (i = 0; i < discardRed.length; i++) {
    redDeck.push(discardRed[i]);
    discardRed.splice(i, 1);
    i--;
  }
  document.getElementById("red-deck").innerHTML = "There are currently " + redDeck.length + " cards in this deck.";

  for (i = 0; i < discardBlack.length; i++) {
    blackDeck.push(discardBlack[i]);
    discardBlack.splice(i, 1);
    i--;
  }
  document.getElementById("black-deck").innerHTML = "There are currently " + blackDeck.length + " cards in this deck.";
}
