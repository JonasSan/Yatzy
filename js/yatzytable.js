let game = [];

let player = {
  user: "user",
  score: "0"
};

game.push(player);

let dice = [
  "Dice 1",
  "Dice 2",
  "Dice 3",
  "Dice 4",
  "Dice 5",
  "Dice 6"
];

let player1_ones = parseInt(document.getElementById("player1_ones").value);

function updateTotal1() {
  let scores = [];

  scores.push(parseInt(document.getElementById("player1_ones").value));
  scores.push(parseInt(document.getElementById("player1_twos").value));
  scores.push(parseInt(document.getElementById("player1_threes").value));
  scores.push(parseInt(document.getElementById("player1_fours").value));
  scores.push(parseInt(document.getElementById("player1_fives").value));
  scores.push(parseInt(document.getElementById("player1_sixes").value));

  let total1 = 0;
  var i;
  for (i = 0; i < scores.length; i++) {
    total1 += scores[i];
  }
  return document.getElementById("player1_total1").innerHTML = total1;
}

player1_ones.addEventListener("oninput", updateTotal1);
