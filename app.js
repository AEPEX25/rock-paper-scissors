"use strict";

//////////////////////////Rock Paper Scissors//////////////////////////////

///// Elements Selections /////

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const rockPc = document.querySelector(".pc-choice-rock");
const paperPc = document.querySelector(".pc-choice-paper");
const scissorsPc = document.querySelector(".pc-choice-scissors");
const div_playerScore = document.querySelector(".player-score");
const div_computerScore = document.querySelector(".computer-score");
let spanPlayerScore = document.querySelector(".p-score");
let spanComputerScore = document.querySelector(".c-score");
let displayResult = document.querySelector(".results");
const playAgainBtn = document.querySelector(".play-again-btn");
const playerIconContainer = document.querySelector(".player-choices-container");
const pcIconsContainer = document.querySelector(".computer-choices-container");

///// Scores /////

let playerScore = 0;
let computerScore = 0;

///// Choices /////

const choices = ["rock", "paper", "scissors"];

///// Computer Choice /////
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

///// Computer Selection Color //////

function pcIconColors(selection) {
  if (selection == "rock") {
    rockPc.classList.add("computer-choice");
    setTimeout(function () {
      rockPc.classList.add("no-computer-choice");
    }, 800);
  } else if (selection == "paper") {
    paperPc.classList.add("computer-choice");
    setTimeout(function () {
      paperPc.classList.add("no-computer-choice");
    }, 800);
  } else if (selection == "scissors") {
    scissorsPc.classList.add("computer-choice");
    setTimeout(function () {
      scissorsPc.classList.add("no-computer-choice");
    }, 800);
  }
  setTimeout(function () {
    clearPcIcons();
  }, 1000);
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
}

function lose() {
  computerScore += 1;
  spanComputerScore.textContent = computerScore;
}

///// playRound /////

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  pcIconColors(computerSelection);
  let result = checkWinner(playerSelection, computerSelection);
  if (result === "tie") {
    displayResult.textContent = "IT'S A TIE!!!";
  } else if (result === "player") {
    win();
    displayResult.textContent = `YOU WIN THE ROUND!!! ${playerSelection} beats ${computerSelection}\n - Current score: Player ( ${playerScore} ) : Computer ( ${computerScore} )`;
  } else if (result === "computer") {
    lose();
    displayResult.textContent = `YOU LOSE THE ROUND!!! ${computerSelection} beats ${playerSelection}\n - Current score: Computer ( ${computerScore} ) : Player ( ${playerScore} )`;
  }
}

///// Game /////

function game(playerSelection) {
  playRound(playerSelection);
  if (playerScore === 5) {
    disableButtons();
    displayResult.textContent = `YOU WIN THE GAME!!!! Final Score - Player ( ${playerScore} ) : Computer ( ${computerScore} )`;
  } else if (computerScore === 5) {
    disableButtons();
    displayResult.textContent = `YOU LOSE THE GAME!! Final Score - Computer ( ${computerScore} ) : Player ( ${playerScore} )`;
  }
}

///// Clear Pc Icons /////

function clearPcIcons() {
  rockPc.classList.remove("computer-choice", "no-computer-choice");
  paperPc.classList.remove("computer-choice", "no-computer-choice");
  scissorsPc.classList.remove("computer-choice", "no-computer-choice");
}

///// Disable Buttons /////

function disableButtons() {
  playerIconContainer.classList.add("disable-buttons");
  pcIconsContainer.classList.add("disable-buttons");
}

///// Play again btn /////

const playAgain = function () {
  playerScore = 0;
  computerScore = 0;
  spanPlayerScore.textContent = playerScore;
  spanComputerScore.textContent = computerScore;
  displayResult.textContent = "New Game!!";
  playerIconContainer.classList.remove("disable-buttons");
  pcIconsContainer.classList.remove("disable-buttons");
};

playAgainBtn.addEventListener("click", playAgain);
