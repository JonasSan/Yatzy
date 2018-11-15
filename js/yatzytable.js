document.addEventListener("DOMContentLoaded", function (event) {

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

  const BONUS = 75;

  const player1_ones = document.getElementById("player1_ones");
  const player1_twos = document.getElementById("player1_twos");
  const player1_threes = document.getElementById("player1_threes");
  const player1_fours = document.getElementById("player1_fours");
  const player1_fives = document.getElementById("player1_fives");
  const player1_sixes = document.getElementById("player1_sixes");

  function updateTotal1() {
    let scores = [];

    scores.push(parseInt(player1_ones.value));
    scores.push(parseInt(player1_twos.value));
    scores.push(parseInt(player1_threes.value));
    scores.push(parseInt(player1_fours.value));
    scores.push(parseInt(player1_fives.value));
    scores.push(parseInt(player1_sixes.value));

    let total1 = 0;
    var i;
    for (i = 0; i < scores.length; i++) {
      total1 += scores[i];
    }
    document.getElementById("player1_total1").innerHTML = total1;
    if (total1 >= 63) {
      document.getElementById("player1_bonus").innerHTML = BONUS;
    } else {
      document.getElementById("player1_bonus").innerHTML = 0;
    }
  }


  player1_ones.addEventListener("change", updateTotal1);
  player1_twos.addEventListener("change", updateTotal1);
  player1_threes.addEventListener("change", updateTotal1);
  player1_fours.addEventListener("change", updateTotal1);
  player1_fives.addEventListener("change", updateTotal1);
  player1_sixes.addEventListener("change", updateTotal1);


  var savedDices = [];

  $(".dice").click(function () {
    console.log($(this).text());
    $(this).toggleClass("visibleDice");
  });

  let turnCounter = 0;

  function getDiceNumber() {
    turnCounter++;
    console.log("stg");
    for (let i = 1; i <= 6; i++) {
      if ($("#dice" + i).hasClass('visibleDice') == false) {
        document.getElementById("dice" + i).innerHTML = Math.floor(Math.random() * (7 - 1) + 1);
      } else {
        continue;
      }
    }
    //console.log(savedDices);
  };

  // $("#roll").click(function () {
  //   console.log("stg");
  //   for (let i = 1; i <= 6; i++) {
  //     if ($("#dice" + i).hasClass('visibleDice') == false) {
  //       document.getElementById("dice" + i).innerHTML = Math.floor(Math.random() * (7 - 1) + 1);
  //     } else {
  //       continue;
  //     }
  //   }
  // });

  var roll = document.getElementById("roll");

  //console.log(roll);

  roll.addEventListener("click", getDiceNumber);

  // while (turnCounter < 3) {
  //   console.log(turnCounter);
  //   roll.addEventListener("click", getDiceNumber);


  // }
  turnCounter = 0;

});


