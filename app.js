'use strict'

const choices = ['rock', 'paper', 'scissors'];

/////Player Selection/////

const playerSelection = prompt('Choose between Rock, Paper and Scissors:').toLowerCase();
console.log(playerSelection);

/////Computer Selection/////

function getComputerChoice (str) {
    let computerRandomChoice = Math.floor(Math.random() * (str.length));
    return str[computerRandomChoice];
} 

const computerSelection = getComputerChoice(choices);
console.log (computerSelection);

/////Game Logic////

function playRound (playerSelection, computerSelection){
let winner = '';
    if (playerSelection === computerSelection) {
        console.log ('it\'s a tie!!! ');
    } else if (computerSelection == 'rock') {
        console.log ( (playerSelection == 'paper') ? `You Win! ${playerSelection} beats ${computerSelection} ` : `You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection == 'paper') {
        console.log ( (playerSelection == 'scissors') ? `You Win! ${playerSelection} beats ${computerSelection} ` :`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection == 'scissors') {
        console.log ( (playerSelection == 'rock') ? `You Win! ${playerSelection} beats ${computerSelection} ` : `You Lose! ${computerSelection} beats ${playerSelection}`);
    }
};

playRound (playerSelection,computerSelection);
console.log (winner);

function game (winner) {
    let playerScore = 0;
    let pcScore = 0;
  for (let i  = 0; i < winner.length; i++ ) {
    if (winner = playerScore) {
        playerScore += playerScore[i];
    }
   
  }
  
}