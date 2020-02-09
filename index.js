var dice1,
    dice2,
    announcement,
    winner;

// TODO: create core function for rolling the dice once
function rollDice() {
  var dice = Math.random() * 6;
  return Math.floor(dice) + 1;
}

function constructDiceImg(result) {
  var pathToImg = "images/dice" + result + ".png";
  return pathToImg;
}

// TODO: bind button elemebt to dice function
document.querySelector("button").onclick = function(e){
  if (document.querySelector(".winner") != null) {
    document.querySelector(".winner").classList.remove("winner");
  }
  dice1 = rollDice();
  dice2 = rollDice();
  // TODO: Show dice IMGs according to results
  document.querySelector("#player-1 img").setAttribute("src",constructDiceImg(dice1));
  document.querySelector("#player-2 img").setAttribute("src",constructDiceImg(dice2));

  // TODO: announce the winner
  if (dice1 === dice2) {
    announcement = "We have a tie!";
  } else if (dice1 > dice2) {
    winner = 1;
    announcement = "Player 1 Wins!";
    document.getElementById("player-1").classList.add("winner");
  } else {
    winner = 2;
    announcement = "Player 2 Wins!";
    document.getElementById("player-2").classList.add("winner");

  }
  document.getElementById("#announcement").innerText = announcement;

}
