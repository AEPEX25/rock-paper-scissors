'use strict'

let playerScore = 0;
let computerScore = 0;
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

/////Round Logic////

function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log ('it\'s a tie!!! ');
    } else if (computerSelection == 'rock') {
        return ( (playerSelection == 'paper') ? win(): lose());
    } else if (computerSelection == 'paper') {
        return ( (playerSelection == 'scissors') ? win(): lose());
    } else if (computerSelection == 'scissors') {
        return ( (playerSelection == 'rock') ? win(): lose());
    }
};

console.log (playRound (playerSelection,computerSelection));

/////Wins and Loses////

function win () {
    playerScore++;
    console.log(`You Win! ${playerSelection} beats ${computerSelection} - Score: ${playerScore} : ${computerScore} `);
};

function lose () {
    computerScore++;
    console.log(`You Lose! ${computerSelection} beats ${playerSelection} - Score: ${computerScore} : ${playerScore} `);
};

/////Game Logic////

function game (round){
  for (let i = 0; i > 5; i++){
    playRound();
  }
  if(playerScore = 5){
    alert('You wins the game'); 
  } else {
    alert('You loses the game');
  }
}

































/*
function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log ('it\'s a tie!!! ');
    } else if (computerSelection == 'rock') {
        return ( (playerSelection == 'paper') ? `You Win! ${playerSelection} beats ${computerSelection} ` : `You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection == 'paper') {
        return ( (playerSelection == 'scissors') ? `You Win! ${playerSelection} beats ${computerSelection} ` :`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection == 'scissors') {
        return ( (playerSelection == 'rock') ? `You Win! ${playerSelection} beats ${computerSelection} ` : `You Lose! ${computerSelection} beats ${playerSelection}`);
    }
};
*/


