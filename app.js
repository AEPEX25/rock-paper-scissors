'use strict'

//////////////////////////Rock Paper Scissors//////////////////////////////

let playerScore = 0;
let computerScore = 0;

const choices = ['rock','paper', 'scissors'];

///// Computer Choice /////

function getComputerChoice () {
  return choices[Math.floor(Math.random() * choices.length)];
}  

///// Player Choice /////

function getPlayerChoice () {
  let input = prompt('Please, type Rock, Paper or Scissors').toLowerCase();
  return input;
}

///// Check Winner /////

function checkWinner (playerSelection, computerSelection){
 if(playerSelection === computerSelection) {
    return 'tie';
  } else if ((playerSelection === 'paper' && computerSelection === 'rock') || 
             (playerSelection === 'rock' && computerSelection === 'scissors') ||
             (playerSelection === 'scissors' && computerSelection === 'paper')){
    return 'player';
  } else {
    return 'computer';
  }
}

///// playRound /////

function playRound (playerSelection,computerSelection) {
  let result = checkWinner(playerSelection, computerSelection);
  if (result === 'tie') {
    console.log('IT\'S A TIE!!!');
  } else if (result === 'player'){
    playerScore += 1;
    console.log(`YOU WIN THE ROUND!!! ${playerSelection} beats ${computerSelection} - Current score: Player ( ${playerScore} ) : Computer ( ${computerScore} )`);
  } else if ( result === 'computer' ){
    computerScore += 1;
    console.log(`YOU LOSE THE ROUND!!! ${computerSelection} beats ${playerSelection} - Current score: Computer ( ${computerScore} ) : Player ( ${playerScore} )`);
}
};

///// playRound /////

function game () {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
  }
  if (playerScore === computerScore) {
    console.log('IT\'S A TIE GAME!!!');
  } else if (playerScore > computerScore) {
    console.log(`YOU WIN THE GAME!!!! Final Score - Player ( ${playerScore} ) : Computer ( ${computerScore} )`);
  } else {
    console.log(`YOU LOSE THE GAME!! Final Score - Computer ( ${computerScore} ) : Player ( ${playerScore} )`);
  }
}

game();






















