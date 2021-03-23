var whiteDeckMonster = ["0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "2", "2", "2", "(2)", "(2)", "(2)"];
var yellowDeckMonster = ["0", "0", "0", "0", "0", "0", "1", "1", "1", "2", "2", "2", "3", "3", "3", "(3)", "(3)", "(3)"];
var redDeckMonster = ["0", "0", "0", "0", "0", "0", "2", "2", "2", "3", "3", "3", "3", "3", "3", "(4)", "(4)", "(4)"];
var blackDeckMonster = ["0", "0", "0", "0", "0", "0", "3", "3", "3", "3", "3", "3", "4", "4", "4", "(5)", "(5)", "(5)"];
var currentWhiteMonster = [];
var currentYellowMonster = [];
var currentRedMonster = [];
var currentBlackMonster = [];
var discardWhiteMonster = [];
var discardYellowMonster = [];
var discardRedMonster = [];
var discardBlackMonster = [];

//On button click this function is activated
function mdraw (item, index){
  //This grabs the values out of HTML that the user inputs
  var w = document.getElementById("md-white").value;
  var y = document.getElementById("md-yellow").value;
  var r = document.getElementById("md-red").value;
  var b = document.getElementById("md-black").value;

  //Set's the value to 0 then for ever i < w(user input) it will pull a random card until the required user input is matched.
  for (i = 0; i < w; i++){
    currentWhiteMonster.push(whiteDeckMonster.splice(Math.floor(Math.random()*whiteDeckMonster.length), 1))
    if (whiteDeckMonster.length === 0) {
      //To prevent conflict with the above i=0 we name the below variable (mw,my,mr,mb with e) 'mwe'(monsterWhiteEmpty) or 'mbe' as example for white & black decks that would draw on a zero would auto reshuffe what is currently in the discard pile only.
      for (mwe = 0; i < discardWhiteMonster.length; mwe++) {
        whiteDeckMonster.push(discardWhiteMonster[mwe]);
        discardWhiteMonster.splice(mwe, 1);
        mwe--;
      }
    }
  }
  document.getElementById("md-draw-white").innerHTML = currentWhiteMonster;
  //Everytime draw is clicked the HTML field is set back to 0
  document.getElementById("md-white").value = 0;
  document.getElementById("md-white-deck").innerHTML = "There are currently " + whiteDeckMonster.length + " cards in this deck.";


  //Yellow decks random draw and populating new current array.
  for (i = 0; i < y; i++){
    currentYellowMonster.push(yellowDeckMonster.splice(Math.floor(Math.random()*yellowDeckMonster.length), 1))
    if (yellowDeckMonster.length === 0) {
      //To prevent conflict with the above i=0 we name the below variable (mw,my,mr,mb with e) 'mwe'(monsterWhiteEmpty) or 'mbe' as example for white & black decks that would draw on a zero would auto reshuffe what is currently in the discard pile only.
      for (mye = 0; mye < discardYellowMonster.length; mye++) {
        yellowDeckMonster.push(discardYellowMonster[mye]);
        discardYellowMonster.splice(mye, 1);
        mye--;
      }
    }
  }
  document.getElementById("md-draw-yellow").innerHTML = currentYellowMonster;
  document.getElementById("md-yellow").value = 0;
  document.getElementById("md-yellow-deck").innerHTML = "There are currently " + yellowDeckMonster.length + " cards in this deck.";

  //Red decks random draw and populating new current array.
  for (i = 0; i < r; i++){
    currentRedMonster.push(redDeckMonster.splice(Math.floor(Math.random()*redDeckMonster.length), 1))
    if (redDeckMonster.length === 0) {
      //To prevent conflict with the above i=0 we name the below variable (mw,my,mr,mb with e) 'mwe'(monsterWhiteEmpty) or 'mbe' as example for white & black decks that would draw on a zero would auto reshuffe what is currently in the discard pile only.
      for (mre = 0; mre < discardRedMonster.length; mre++) {
        redDeckMonster.push(discardRedMonster[mre]);
        discardRedMonster.splice(mre, 1);
        mre--;
      }
    }
  }
  document.getElementById("md-draw-red").innerHTML = currentRedMonster;
  document.getElementById("md-red").value = 0;
  document.getElementById("md-red-deck").innerHTML = "There are currently " + redDeckMonster.length + " cards in this deck.";

  //Black decks random draw and populating new current array.
  for (i = 0; i < b; i++){
    currentBlackMonster.push(blackDeckMonster.splice(Math.floor(Math.random()*blackDeckMonster.length), 1))
    if (blackDeckMonster.length === 0) {
      //To prevent conflict with the above i=0 we name the below variable (mw,my,mr,mb with e) 'mwe'(monsterWhiteEmpty) or 'mbe' as example for white & black decks that would draw on a zero would auto reshuffe what is currently in the discard pile only.
      for (mbe = 0; mbe < discardBlackMonster.length; mbe++) {
        blackDeckMonster.push(discardWhiteMonster[mbe]);
        discardBlackMonster.splice(mbe, 1);
        mbe--;
      }
    }
  }
  document.getElementById("md-draw-black").innerHTML = currentBlackMonster;
  document.getElementById("md-black").value = 0;
  document.getElementById("md-black-deck").innerHTML = "There are currently " + blackDeckMonster.length + " cards in this deck.";
}

//Clears the <p> tags from the HTML and moves the currentCards to the respective discardCard arrays.
function mdiscard(){
  for (i = 0; i < currentWhiteMonster.length; i++) {
    discardWhiteMonster.push(currentWhiteMonster[i]);
    currentWhiteMonster.splice(i, 1);
    i--;
  }
  document.getElementById("md-draw-white").innerHTML = "";

  for (i = 0; i < currentYellowMonster.length; i++) {
    discardYellowMonster.push(currentYellowMonster[i]);
    currentYellowMonster.splice(i, 1);
    i--;
  }
  document.getElementById("md-draw-yellow").innerHTML = "";

  for (i = 0; i < currentRedMonster.length; i++) {
    discardRedMonster.push(currentRedMonster[i]);
    currentRedMonster.splice(i, 1);
    i--;
  }
  document.getElementById("md-draw-red").innerHTML = "";

  for (i = 0; i < currentBlackMonster.length; i++) {
    discardBlackMonster.push(currentBlackMonster[i]);
    currentBlackMonster.splice(i, 1);
    i--;
  }
  document.getElementById("md-draw-black").innerHTML = "";
}

function mreset(){
  console.log("Reset Activated")
  for (i = 0; i < discardWhiteMonster.length; i++) {
    whiteDeckMonster.push(discardWhiteMonster[i]);
    discardWhiteMonster.splice(i, 1);
    i--;
  }
  document.getElementById("md-white-deck").innerHTML = "There are currently " + whiteDeckMonster.length + " cards in this deck.";

  for (i = 0; i < discardYellowMonster.length; i++) {
    yellowDeckMonster.push(discardYellowMonster[i]);
    discardYellowMonster.splice(i, 1);
    i--;
  }
  document.getElementById("md-yellow-deck").innerHTML = "There are currently " + yellowDeckMonster.length + " cards in this deck.";

  for (i = 0; i < discardRedMonster.length; i++) {
    redDeckMonster.push(discardRedMonster[i]);
    discardRedMonster.splice(i, 1);
    i--;
  }
  document.getElementById("md-red-deck").innerHTML = "There are currently " + redDeckMonster.length + " cards in this deck.";

  for (i = 0; i < discardBlackMonster.length; i++) {
    blackDeckMonster.push(discardBlackMonster[i]);
    discardBlackMonster.splice(i, 1);
    i--;
  }
  document.getElementById("md-black-deck").innerHTML = "There are currently " + blackDeckMonster.length + " cards in this deck.";
}
