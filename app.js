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
let displayResult = document.querySelector(".results");

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
    game("rock");
  });

  btnPaper.addEventListener("click", function () {
    game("paper");
  });

  btnScissors.addEventListener("click", function () {
    game("scissors");
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
  console.log(playerScore);
}

function lose() {
  computerScore += 1;
  spanComputerScore.textContent = computerScore;
  console.log(computerScore);
}

///// playRound /////

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  let result = checkWinner(playerSelection, computerSelection);
  if (result === "tie") {
    displayResult.textContent = "IT'S A TIE!!!";
  } else if (result === "player") {
    win();
    displayResult.textContent = `YOU WIN THE ROUND!!! ${playerSelection} beats ${computerSelection} - Current score: Player ( ${playerScore} ) : Computer ( ${computerScore} )`;
  } else if (result === "computer") {
    lose();
    displayResult.textContent = `YOU LOSE THE ROUND!!! ${computerSelection} beats ${playerSelection} - Current score: Computer ( ${computerScore} ) : Player ( ${playerScore} )`;
  }
}

///// Game /////

function game(playerSelection) {
  playRound(playerSelection);
  if (playerScore === 5) {
    displayResult.textContent = `YOU WIN THE GAME!!!! Final Score - Player ( ${playerScore} ) : Computer ( ${computerScore} )`;
  } else if (computerScore === 5) {
    displayResult.textContent = `YOU LOSE THE GAME!! Final Score - Computer ( ${computerScore} ) : Player ( ${playerScore} )`;
  }
}
