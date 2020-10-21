


function roll() {
var player1 = random("#firstDie");
var player2 = random("#secondDie");

result(player1, player2);
}

function random(id) {
var num = Math.floor(Math.random() * 6) + 1;

if (num == 1) {
  document.querySelector(id).setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/120px-Dice-1-b.svg.png");
} else if (num == 2) {
  document.querySelector(id).setAttribute("src", "https://webstockreview.net/images/dice-clipart-2-dot-6.png");
} else if (num == 3) {
  document.querySelector(id).setAttribute("src", "https://webstockreview.net/images/dice-clipart-bunco-18.png");

} else if (num == 4) {
  document.querySelector(id).setAttribute("src", "https://webstockreview.net/images/dice-clipart-individual-1.png");

} else if (num == 5) {
  document.querySelector(id).setAttribute("src", "https://webstockreview.net/images/dice-clipart-five-2.png");

} else if (num == 6) {
  document.querySelector(id).setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dice-6a-b.svg/1024px-Dice-6a-b.svg.png");

}
return num;
}

function result(player1, player2) {
var audio = new Audio("TaDa.mp3");
if (player1 > player2) {
  document.querySelector("#resultText").textContent = "Player 1 is The Winner";
  document.querySelector("#resultTextP2").textContent = player1+" - "+player2;
  audio.play();
} else if (player1 == player2) {
  document.querySelector("#resultText").textContent = "Draw";
  document.querySelector("#resultTextP2").textContent = player1+" - "+player2;

} else {
  document.querySelector("#resultText").textContent = "Player 2 is The Winner";
  document.querySelector("#resultTextP2").textContent = player1+" - "+player2;
  audio.play();
}

}
