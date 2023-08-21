const choicesArray = ['rock', 'paper', 'scissors'];

const getComputerChoice = (array) => array[(Math.floor(Math.random() * array.length))];

const results = document.querySelector('#results');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        results.textContent = 'tie';
    } else if (
        ((playerSelection == choicesArray[0]) && (computerSelection == choicesArray[2])) || 
        ((playerSelection == choicesArray[1]) && (computerSelection == choicesArray[0])) ||
        ((playerSelection == choicesArray[2]) && (computerSelection == choicesArray[1]))
    ) {
        results.textContent = 'player wins';
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else {
        results.textContent = 'computer wins';
        computerScore.textContent = Number(computerScore.textContent) + 1;
    };
};

const buttons = document.querySelectorAll('.selection-button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice(choicesArray);

        playRound(playerSelection, computerSelection)
    });
});
