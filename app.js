"use strict";

//////////////////////////Rock Paper Scissors//////////////////////////////

///// Elements Selections /////

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const div_playerScore = document.querySelector(".player-score");
const div_computerScore = document.querySelector(".computer-score");
let spanPlayerScore = document.querySelector(".p-score");
let spanComputerScore = document.querySelector(".c-score");

///// Scores /////

let playerScore = 0;
let computerScore = 0;

///// Choices /////

const choices = ["rock", "paper", "scissors"];

///// Computer Choice /////
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

///// Player Choice /////
function getPlayerChoice() {
  btnRock.addEventListener("click", function () {
    playRound("rock");
  });

  btnPaper.addEventListener("click", function () {
    playRound("paper");
  });

  btnScissors.addEventListener("click", function () {
    playRound("scissors");
  });
}

getPlayerChoice();

///// Check Winner /////

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function win() {
  playerScore += 1;
  spanPlayerScore.textContent = playerScore;
}

function lose() {
  computerScore += 1;
  spanComputerScore.textContent = computerScore;
}

///// playRound /////

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  let result = checkWinner(playerSelection, computerSelection);
  if (result === "tie") {
    console.log("IT'S A TIE!!!");
  } else if (result === "player") {
    win();
    console.log(
      `YOU WIN THE ROUND!!! ${playerSelection} beats ${computerSelection} - Current score: Player ( ${playerScore} ) : Computer ( ${computerScore} )`
    );
  } else if (result === "computer") {
    lose();
    console.log(
      `YOU LOSE THE ROUND!!! ${computerSelection} beats ${playerSelection} - Current score: Computer ( ${computerScore} ) : Player ( ${playerScore} )`
    );
  }
}

///// playRound /////
/*
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore === computerScore) {
    console.log("IT'S A TIE GAME!!!");
  } else if (playerScore > computerScore) {
    console.log(
      `YOU WIN THE GAME!!!! Final Score - Player ( ${playerScore} ) : Computer ( ${computerScore} )`
    );
  } else {
    console.log(
      `YOU LOSE THE GAME!! Final Score - Computer ( ${computerScore} ) : Player ( ${playerScore} )`
    );
  }
}

game();

holla 
*/
